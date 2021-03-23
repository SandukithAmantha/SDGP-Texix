import numpy as np
import cv2
import pickle



width=640
height=480
threshold=0.65

capture=cv2.VideoCapture(1)
capture.set(3,width)
capture.set(4,height)


#model = keras.models.load_model("model_trained.p")
pickle_in=open("trained_model.p","rb")
model=pickle.load(pickle_in)

def preProcessing(img):
    img-cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    img=cv2.equalizeHist(img)
    img=img/255
    return img

while True:
    success,imgOriginal=capture.read()
    img=np.asarray(imgOriginal)
    img=cv2.resize(img,(640,480))
    img=preProcessing(img)
    cv2.imshow(img)
    cv2.imshow("Processed Image",img)
    img=img.reshape(1,32,32,1)
    #predict
    classIndex=int(model.predict_classes(img))
    print(classIndex)
    predictions=model.predict(img)
    probVal=np.amax(predictions)

    if probVal>threshold:
        cv2.putText(imgOriginal,str(classIndex)+" "+str(probVal),(50,50),cv2.FONT_HERSHEY_SIMPLEX,
                    1,(0,0,255),1)
        cv2.imshow("Original Image",imgOriginal)

    k = cv2.waitKey(1) & 0xff
    if k == 27:
        break
capture.release()