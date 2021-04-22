import numpy as np
import cv2
import pickle
from tensorflow.python.keras.models import load_model
from PIL import ImageFont, ImageDraw, Image
#print(cv2.__version__)

###parameterrs###

width = 640
height = 480
threshold = 0.65
#threshold means minimum probability to classify

#this is the code for creatinng the image objrct
#imageObj=cv2.imread("dataset/dataset/9/img11776_0 - Copy (5).png")

#this is the code for creatinng the camera objrct
imageObj=cv2.imread("TestingImages/WhatsApp Image 2021-04-22 at 19.53.42.jpeg")




#here im loading the saved pretrained model
model = load_model('model.h5')

#thid is the code for processing
def preProcessing(img):
    img = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    img = cv2.equalizeHist(img)
    img = img/255
    return img


#success, imgOriginal = capture.read()
img = np.asarray(imageObj)
img=cv2.resize(imageObj,(32,32))
img = preProcessing(img)
#cv2.imshow("Processed Image",img)
img = img.reshape(1, 32, 32, 1)
#prediction
classIndex = int(model.predict_classes(img))

labelDictionary = {0: 'ං',    1: 'අ',   2: 'ඉ',  3: 'ඊ',   4: 'උ',  5: 'එ',  6: 'ඒ',    7: 'ඔ',    8: 'ක', 9: 'ක්', 10: 'කා',
                   11: 'කැ',  12: 'කෑ', 13: 'කි', 14: 'කී', 15: 'කු', 16: 'කූ', 17: 'කෙ', 18: 'කේ',  19: 'කො',
                   20: 'කෝ', 21: 'ඛ', 22: 'ග',  23: 'ගි', 24: 'ගී', 25: 'ගු',  26: 'ගූ',  27: 'ඝ',   28: 'ඟ', 29: 'ච',
                   30: 'ඡ',   31: 'ජ', 32: 'ජ්',  33: 'ජි', 34: 'ජී', 35: 'ඣ', 36: 'ඤ',  37: 'ඥ',  38: 'ට', 39: 'ඨ',
                   40: 'ඩ',   41: 'ඪ', 42: 'ණ', 43: 'ඬ', 44: 'ත', 45: 'ත්', 46: 'ථ',   47: 'ථි',   48: 'ථී', 49: 'ද', 50: 'දු',
                   51: 'දූ',   52: 'ධ', 53: 'න',  54: 'ඳ', 55: 'ප', 56: 'පු', 57: 'පූ',   58: 'ඵ',   59: 'බ', 60: 'භ',
                   61: 'ම',   62: 'ම්', 63: 'මි',  64: 'මී', 65: 'ඹ', 66: 'ය', 67: 'ර',   68: 'ල',   69: 'ව', 70: 'ව්', 71: 'වි',
                   72: 'වී',   73: 'වු', 74: 'වූ',  75: 'ශ', 76: 'ෂ', 77: 'ස', 78: 'හ',   79: 'ළ',   80: 'ළු', 81: 'ෆ',
                   82: 'ා'}

predictions = model.predict(img)
predictedLetter = labelDictionary.get(classIndex)
probabilityValue = np.amax(predictions)
print(predictedLetter, probabilityValue)



if probabilityValue > threshold:
    org = (50,50)
    fontScale = 1
    fontpath = "iskpota.ttf"
    font = ImageFont.truetype(fontpath, 20)
    color = (255,0,0)
    thickness = 2
    b, g, r, a = 30,0,150,0
    #image  = cv2.putText(imageObj, predictedLetter, org, font,
                   #fontScale, color, thickness, cv2.LINE_AA)
    img_pil = Image.fromarray(imageObj)
    draw = ImageDraw.Draw(img_pil)
    text = predictedLetter + " - " + str(probabilityValue)
    draw.text((0,0),text, font = font, fill=(b,g,r,a))
    image = np.array(img_pil)

    cv2.imshow("Output", image)
    cv2.waitKey()

