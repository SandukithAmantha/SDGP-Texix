import requests
import responses
import base64

from PIL import Image
from io import BytesIO

string = requests.get("http://localhost:8080/imageToPy")
print(string.text)

im = Image.open(BytesIO(base64.b64decode(string.text)))
im.save('encodedImg.png', 'PNG')

# responses.add(responses.Response(method='GET', url='http://localhost:8080/getResponsePy'))
responses.add(responses.GET,
              'http://localhost:8080/getResponsePy',
              headers={'content-type': 'application/json'})
