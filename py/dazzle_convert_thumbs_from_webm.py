import dazzle as DAZZLE
from PIL import Image
from resizeimage import resizeimage
import os
import os.path

parcels = DAZZLE.get_parcels(True)

for p in parcels:
    thumb_original = p+"thumb_original.webp"
    print(p)
   	
    if os.path.isfile(thumb_original):
        im = Image.open(thumb_original).convert("RGB")
        #print(im.format, im.size, im.mode)
        im.save(p+"thumb_original.jpg","jpeg")
        os.remove(thumb_original)

    thumb_t = p+"t.webp"
    if os.path.isfile(thumb_t):
        os.remove(thumb_t)


