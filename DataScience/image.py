import requests
import base64

from PIL import Image
from io import BytesIO


# get the image from the backend
def getImage():
    string = requests.get("http://localhost:8080/imageToPy")
    # check whether the image pass or not
    if string.status_code == 200:
        print('Image pass Successfully!')
    else:
        print('Image Not pass.')

    image = Image.open(BytesIO(base64.b64decode(string.text)))
    image.save('encodedImg.png', 'PNG')


# pass the value of the image to the backend
def returnImageValue(string):
    res = requests.get('http://localhost:8080/getResponsePy', params={'iName': string})
    # check whether the String pass or not
    if res.status_code == 200:
        print('Data pass Successfully!')
    else:
        print('Data Not pass.')
