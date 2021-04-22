# import base64
# image = open('image.png', 'rb')
# image_read = image.read()
# image_64_encode = base64.encodestring(image_read)
# print(image_64_encode)
# image_64_decode = base64.decodestring(image_64_encode)
# image_result = open('image_decode.png', 'wb') # create a writable image and write the decoding result
# image_result.write(image_64_decode)

import base64
from PIL import Image
from io import BytesIO

with open("img.jpg", "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read())
    print(encoded_string)

im = Image.open(BytesIO(base64.b64decode(encoded_string)))
im.save('encoded&decodedIMG.png', 'PNG')