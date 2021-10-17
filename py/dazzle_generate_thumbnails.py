import dazzle as DAZZLE
from PIL import Image
from resizeimage import resizeimage
import os
import os.path

parcels = DAZZLE.get_parcels(True)

for p in parcels:
    thumb = p+DAZZLE.original_thumb_file

    print(thumb)
    if os.path.isfile(thumb):
        im = Image.open(thumb)
        #print(im.format, im.size, im.mode)
        im = resizeimage.resize_cover(im, [320, 450])
        im.save(p+DAZZLE.thumb_file)


