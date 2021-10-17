import os
import tkinter
from tkinter import filedialog

original_thumb_file = "thumb_original.jpg"
thumb_file = "thumb.jpg"

def get_original_thumb_file_name():
    return "original_thumb.jpg"

def gather_parcels(dir):
    parcels = []
    for fo in os.listdir(dir):
        parcels.append(dir+"/"+fo+"/")
        
    return parcels
    
def gather_categories(dir):
    parcels = []
    for fo in os.listdir(dir):
        parcels = parcels+gather_parcels(dir+"/"+fo)
    return parcels
        
    
def get_parcels(is_category):
    root = tkinter.Tk()
    root.withdraw()
    currdir = "Z:/Dz/"
    libdir = filedialog.askdirectory(parent=root, initialdir=currdir, title='Select Directory to Unpack')
    print("Loading Library: "+libdir)
    return gather_categories(libdir)
    

    

    
