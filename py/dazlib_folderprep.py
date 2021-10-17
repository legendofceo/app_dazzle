from PIL import Image
from resizeimage import resizeimage
import json
import os
import os.path

original_thumb_file = "original_thumb.jpg"
class content_pack():

    root = ""
    category = ""
    folder = ""


    def fix_original_images(self):

        path = self.root+"/"+self.folder+"/"
        if os.path.isfile(path+"flag.webp"):
           im = Image.open(path+"flag.webp")
           im.save(path+"flag.jpg")
           
        if os.path.isfile(path+"flag.jpg"):
           if os.path.isfile(path+original_thumb_file):
                os.remove(path+original_thumb_file)                
           os.rename(path+"flag.jpg",path+original_thumb_file) 
  
        if os.path.isfile(path+"original.jpg"):
           if os.path.isfile(path+original_thumb_file):
                os.remove(path+"original_thumb.jpg")            
           os.rename(path+"original.jpg",path+original_thumb_file)
           
               
    def process_images(self):

        path = self.root+"/"+self.folder+"/"
        if os.path.isfile(path+original_thumb_file):
            im = Image.open(path+original_thumb_file)

            
            #print(im.format, im.size, im.mode)
            im = resizeimage.resize_cover(im, [320, 450])            
            outfile = path+"thumb.jpg"
            im.save(outfile)


    def try_delete_file(self,path):
        if os.path.isfile(path):
            os.remove(path)
                    
    def clean_files(self):
        path = self.root+"/"+self.folder+"/"

        if os.path.isfile(path+original_thumb_file):
            self.try_delete_file(path+"flag.webp")
            self.try_delete_file(path+"flag.jpg")
            self.try_delete_file(path+"t.webp")

    def create_json(self,category,body):
        
        path = self.root+"/"+self.folder+"/"
        if os.path.isfile(path+"dazzle.json")!="HFUFE":
            x = {}
            x["v"] = 1

            if(category=="bop"):
                x["bop"] = {}
                cat = x["bop"]
                if(body=="G8F"):
                    cat["G8F"] = 1
                    cat["fem"] = 1
                if(body=="G8M"):
                    cat["G8M"] = 1
                    cat["male"] = 1
                    
            if(category=="cha"):
                x["cha"] = {}
                cat = x["cha"]
                if(body=="G8F"):
                    cat["G8F"] = 1
                    cat["fem"] = 1
                if(body=="G8M"):
                    cat["G8M"] = 1
                    cat["male"] = 1
                    
            if(category=="clo"):
                x["clo"] = {}
                cat = x["clo"]
                if(body=="G8F"):
                    cat["G8F"] = 1
                    cat["fem"] = 1
                if(body=="G8M"):
                    cat["G8M"] = 1
                    cat["male"] = 1

            if(category=="hai"):
                x["hai"] = {}
                cat = x["hai"]
                if(body=="G8F"):
                    cat["G8F"] = 1
                    cat["fem"] = 1
                if(body=="G8M"):
                    cat["G8M"] = 1
                    cat["male"] = 1

            if(category=="mor"):
                x["mor"] = {}
                cat = x["mor"]
                if(body=="G8F"):
                    cat["G8F"] = 1
                    cat["fem"] = 1
                if(body=="G8M"):
                    cat["G8M"] = 1
                    cat["male"] = 1
            
            if(category=="pos"):
                x["pos"] = {}
                cat = x["pos"]
                if(body=="G8"):
                    cat["G8F"] = 1
                    cat["G8M"] = 1
                    cat["fem"] = 1
                    cat["male"] = 1
                    
            f = open(path+"dazzle.json", "w")
            f.write(json.dumps(x))
            f.close()
            
    def __init__(self, root, folder): 
        self.root = root
        self.folder = folder

      
class dazzle_library():

            
    def get_library(self,dir):
        valids = []
        for filename in os.listdir(dir):
            valids = valids + self.get_category(dir,filename)

        return valids

    def get_category(self,dir,category):
        valids = []
        for filename in os.listdir(dir+category):
            valids.append(content_pack(dir+category,filename))            
        return valids

    def get_contentpack(self,dir):
        return content_pack(dir,filename)
        
        


dzl = dazzle_library()
lib = "Z:/Dz/lib3/"
    
content_packs = dzl.get_library(lib)

bUpdateImages = True
bUpdateJsons = True

if bUpdateImages == True:
    print("--------UPDATING IMAGES------")
    for c in content_packs:
        print(c.folder)
        c.fix_original_images();
        c.process_images();
        c.clean_files();



if bUpdateJsons == True:
    
    content_packs = dzl.get_category(lib,"bop G8F")
    print("--------ADDING JSONS------") 
    for c in content_packs:
        print(c.folder)
        c.create_json("bop","G8F")
        
    content_packs = dzl.get_category(lib,"bop G8M")
    print("--------ADDING JSONS------") 
    for c in content_packs:
        print(c.folder)
        c.create_json("bop","G8M")
        
    content_packs = dzl.get_category(lib,"cha G8F")
    print("--------ADDING JSONS------") 
    for c in content_packs:
        print(c.folder)
        c.create_json("cha","G8F")

    content_packs = dzl.get_category(lib,"cha G8M")
    print("--------ADDING JSONS------") 
    for c in content_packs:
        print(c.folder)
        c.create_json("cha","G8M")
        
    content_packs = dzl.get_category(lib,"clo G8F")
    print("--------ADDING JSONS------") 
    for c in content_packs:
        print(c.folder)
        c.create_json("clo","G8F")
        
    content_packs = dzl.get_category(lib,"clo G8M")
    print("--------ADDING JSONS------") 
    for c in content_packs:
        print(c.folder)
        c.create_json("clo","G8M")

    content_packs = dzl.get_category(lib,"hai G8F")
    print("--------ADDING JSONS------") 
    for c in content_packs:
        print(c.folder)
        c.create_json("hai","G8F")
        
    content_packs = dzl.get_category(lib,"hai G8M")
    print("--------ADDING JSONS------") 
    for c in content_packs:
        print(c.folder)
        c.create_json("hai","G8M")

    content_packs = dzl.get_category(lib,"mor G8F")
    print("--------ADDING JSONS------") 
    for c in content_packs:
        print(c.folder)
        c.create_json("mor","G8F")
        
    content_packs = dzl.get_category(lib,"mor G8M")
    print("--------ADDING JSONS------") 
    for c in content_packs:
        print(c.folder)
        c.create_json("mor","G8M")

    content_packs = dzl.get_category(lib,"pos G8")
    print("--------ADDING JSONS------") 
    for c in content_packs:
        print(c.folder)
        c.create_json("pos","G8")
