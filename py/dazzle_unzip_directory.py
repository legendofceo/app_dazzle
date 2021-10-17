from PIL import Image
from resizeimage import resizeimage
import patoolib
import os
import shutil
import tkinter
from tkinter import filedialog

class archive:

    def unzip_all(self):
        arr = os.listdir(self.work_path)

        found_one = False
        for z in arr:

            if "Templates" in z:
                if(os.path.isdir(self.work_path+z)):
                    shutil.rmtree(self.work_path+z)
                else:
                    os.remove(self.work_path+z)
            else:
                ext = os.path.splitext(z)[1]
                if(ext==".rar" or ext==".zip"):                
                    patoolib.extract_archive(self.work_path+z, outdir=self.work_path)
                    found_one = True
                    os.remove(self.work_path+z)

        if(found_one):
            self.unzip_all()
            
    def set_flag(self):
        arr = os.listdir(self.work_path)

        thumb_orig = self.work_path+("thumb_original.jpg")
        for z in arr:
            ext = os.path.splitext(z)[1]
            if(ext==".jpg"):
                os.rename(self.work_path+z,thumb_orig)
                break


        if(os.path.exists(thumb_orig)):
            im = Image.open(thumb_orig)
            im = resizeimage.resize_cover(im, [320, 450])            
            im.save(self.work_path+"thumb.jpg")


    def clean(self):
        arr = []
        arr.append(self.work_path+"Manifest.dsx")
        arr.append(self.work_path+"Supplement.dsx")
        for x in arr:            
            if(os.path.exists(x)):
                os.remove(x)

        content = self.work_path+"Content/"
        if(os.path.isdir(content)):
            files_list = os.listdir(content)
            #shutil.copytree(content, self.work_path)
            for fi in files_list:
                shutil.copytree(content+fi, self.work_path+fi)
            shutil.rmtree(content)
        
            
    def move_archive(self,move_to):
        shutil.move(self.path+self.archive, move_to+self.archive)
        
    def unpack(self):
        self.work_path = self.path+self.folder+"/"
        os.mkdir(self.work_path)
        patoolib.extract_archive(self.path+self.archive, outdir=self.work_path)
        self.set_flag()
        self.unzip_all()
        self.clean()        

        
            
            
    def __init__(self,in_path,in_archive):
        self.path = in_path
        self.archive = in_archive
        self.folder = os.path.splitext(self.archive)[0]
        
class dazzle_unpack:

    def unpack(self,path):
        done_path = path+"_DONE/"
        if(os.path.exists(done_path)==False):
            os.mkdir(done_path)
            
        arr = os.listdir(path)
        for z in arr:
            print(z)
            if(os.path.isdir(path+z)==False):

                filename, file_extension = os.path.splitext(z)

                if(file_extension==".zip" or file_extension==".rar" or file_extension==".7z"):
                    arch = archive(path,z)
                    arch.unpack()
                    arch.move_archive(done_path)
               
    def __init__(self):
        print('dazzle_unpack')

root = tkinter.Tk()
root.withdraw()

currdir = os.getcwd()
tempdir = filedialog.askdirectory(parent=root, initialdir=currdir, title='Please select a directory')
if len(tempdir) > 0:

    
    dz = dazzle_unpack()
    dz.unpack(tempdir+"/")
