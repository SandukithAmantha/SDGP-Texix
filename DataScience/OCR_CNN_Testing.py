import numpy as np
import cv2
import pickle
from tensorflow.python.keras.models import load_model

###parameterrs###

width = 640
height = 480
threshold = 0.65
#threshold means minimum probability to classify



#this is the code for creatinng the camera objrct
capture = cv2.VideoCapture(0)
capture.set(3,width)
capture.set(4,height)

#here im loading the saved pretrained model
model = load_model('model.h5')

#thid is the code for processing
def preProcessing(img):
    img = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    img = cv2.equalizeHist(img)
    img = img/255
    return img

while True:
    success, imgOriginal = capture.read()
    img = np.asarray(imgOriginal)
    img=cv2.resize(img,(32,32))
    img = preProcessing(img)
    cv2.imshow("Processsed Image",img)
    img = img.reshape(1, 32, 32, 1)
    #prediction
    classIndex = int(model.predict_classes(img))

    predictions = model.predict(img)

    probabilityValue = np.amax(predictions)
    print(classIndex, probabilityValue)

    if probabilityValue > threshold:
        cv2.putText(imgOriginal, str(classIndex) + "   " + str(probabilityValue),
                    (50, 50), cv2.FONT_HERSHEY_COMPLEX,
                    1, (0, 0, 255), 1)

    cv2.imshow("Testing Window", imgOriginal)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break