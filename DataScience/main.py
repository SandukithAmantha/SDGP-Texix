import joblib
import learn as learn
import numpy as np
import cv2
import os
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
from keras.preprocessing.image import ImageDataGenerator
from keras.utils.np_utils import to_categorical

from keras.models import Sequential
from keras.layers import Dense
from keras.optimizers import Adam
from keras.layers import Dropout,Flatten
from keras.layers.convolutional import Conv2D,MaxPooling2D
import pandas
from sklearn import model_selection
from sklearn.linear_model import LogisticRegression
import pickle
import dill
import weakref




path = 'originalData'
pathLabels = 'labels.csv'
testRatio = 0.2
validationRatio = 0.2
imageDimensions = (32, 32, 3)

batchSizeVal=50
epochsVal=5
stepsPerEpoch=200


count = 0
images = []
classNo = []
mylist = os.listdir(path) #this will create a list with folder names
print(mylist)
print("Total Number of Classes Detected ", len(mylist))
noOfClasses = len(mylist)
print("Importing Classes...")
# we will put all the images in a one list


for x in range(0, noOfClasses):
    myPicList = os.listdir(path + "/" + str(x))
    # go in to originalData folder and then 0 folder and in that folder every photo you found must be added to the list
    for y in myPicList:
        curImg = cv2.imread(path + "/" + str(x) + "/" + y)
        curImg = cv2.resize(curImg, (imageDimensions[0], imageDimensions[1]))
        images.append(curImg)
        classNo.append(count)

    print(count, end=" ")
    count += 1
print("Total Images in image List = ", len(images))
print("Total IDS in classNo List = ", len(classNo))
# print(len(classNo))


images = np.array(images)
classNo = np.array(classNo)

# splitting data
x_train, x_test, y_train, y_test = train_test_split(images, classNo, test_size=testRatio)
# your training is 0.8 , testing is 0.2
x_train, x_validation, y_train, y_validation = train_test_split(x_train, y_train, test_size=validationRatio)

print("Training = ", x_train.shape)
print("Testing = ", x_test.shape)
print("Validation = ", x_validation.shape)
'''in here what we are doing is we have 20320 images. then it was split for testing training and validation
first we split all the data in to 80%(training) and 20%(Testing). then we again split that 80% in to 80% and 20%'''

numOfSmaples = []
for x in range(0, noOfClasses):
    # print(len(np.where(y_train==x)[0]))
    numOfSmaples.append(len(np.where(y_train == x)[0]))
print(numOfSmaples)

# bar chart for Number of images for each class
plt.figure(figsize=(10, 5))
plt.bar(range(0, noOfClasses), numOfSmaples)
plt.title("No of Images for each Class")
plt.xlabel("Class ID")
plt.ylabel("Number of Images")
plt.show()


def preProcessing(img):
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    img = cv2.equalizeHist(img)  # makes the lights of the image equally
    img = img / 255
    return img


x_train = np.array(list(map(preProcessing, x_train)))
x_test = np.array(list(map(preProcessing, x_test)))
x_validation = np.array(list(map(preProcessing, x_validation)))

print(x_train.shape)
x_train = x_train.reshape(x_train.shape[0], x_train.shape[1], x_train.shape[2], 1)
x_test = x_test.reshape(x_test.shape[0], x_test.shape[1], x_test.shape[2], 1)
x_validation = x_validation.reshape(x_validation.shape[0], x_validation.shape[1], x_validation.shape[2], 1)

dataGen = ImageDataGenerator(width_shift_range=0.1,
                             height_shift_range=0.1,
                             zoom_range=0.2,
                             shear_range=0.1,
                             rotation_range=10)

dataGen.fit(x_train)

y_train = to_categorical(y_train, noOfClasses)
y_test = to_categorical(y_test, noOfClasses)
y_validation = to_categorical(y_validation, noOfClasses)


def myModel():
    noOfFilters = 60
    sizeOfFilter1 = (5, 5)
    sizeOfFilter2 = (3, 3)
    sizeOfPool = (2, 2)
    noOfNodes = 500

    model = Sequential()
    model.add((Conv2D(noOfFilters, sizeOfFilter1, input_shape=(imageDimensions[0],
                                                               imageDimensions[1],
                                                               1), activation='relu'
                                                                )))

    model.add((Conv2D(noOfFilters, sizeOfFilter1, activation='relu')))
    model.add(MaxPooling2D(pool_size=sizeOfPool))
    model.add((Conv2D(noOfFilters // 2, sizeOfFilter2, activation='relu')))
    model.add((Conv2D(noOfFilters // 2, sizeOfFilter2, activation='relu')))
    model.add(MaxPooling2D(pool_size=sizeOfPool))
    model.add(Dropout(0.5))

    model.add(Flatten())
    model.add(Dense(noOfNodes, activation='relu'))
    model.add(Dropout(0.5))
    model.add(Dense(noOfClasses, activation='softmax'))
    model.compile(Adam(lr=0.001), loss='categorical_crossentropy',
                  metrics=['accuracy'])
    return model

model = myModel()
print(model.summary())

#model.fit_genertor thibbe
history=model.fit_generator(dataGen.flow(x_train,y_train,
                                batch_size=batchSizeVal),
                                steps_per_epoch=stepsPerEpoch,
                                epochs=epochsVal,
                                validation_data=(x_validation,y_validation),
                                shuffle=1)

plt.figure(1)
plt.plot(history.history['loss'])
plt.plot(history.history['val_loss'])
plt.legend(['training','validation'])
plt.title('Loss')
plt.xlabel('epoch')

plt.figure(2)
plt.plot(history.history['accuracy'])
plt.plot(history.history['val_accuracy'])
plt.legend(['training','validation'])
plt.title('Accuracy')
plt.xlabel('epoch')
plt.show()

score=model.evaluate(x_test,y_test,verbose=0)
print('Test Score = ',score[0])
print('Test Accuracy = ',score[1])

#Save the model
model.save("model.h5")
print("Saved model to disk")
model.summary()

print(x_train.shape)
print(x_train[30].shape)

# img = preProcessing(x_train[30])
# # img = cv2.resize(img, (300, 300))
# # cv2.imshow("PreProcessedImage",img)
# # cv2.waitKey(0)
