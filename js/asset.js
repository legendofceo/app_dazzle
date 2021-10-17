var _assets = []
var _valid_assets = []
var _asset_num = 0
var category = require(__dirname+'/category.js')

class asset_c
{

    constructor()
    {
        this.categories = {}

        this.img_loaded = false;

        let div = document.createElement("div")
        div.classList.add("parcel_thumb")
        div.addEventListener("click",this.on_click.bind(this))
        let div_img = document.createElement("div")
        div_img.classList.add("parcel_thumb_img")

        let div_text = document.createElement("div")
        div_text.classList.add("parcel_thumb_text")

        let div_glass = document.createElement("div")
        div_glass.classList.add("parcel_thumb_glass")

        let div_selected = document.createElement("div")
        div_selected.classList.add("parcel_thumb_selected")

        div_glass.appendChild(div_selected)
        div_img.appendChild(div_glass)
        div.appendChild(div_img)
        div.appendChild(div_text)
        div_text.innerHTML = this.id

        this.thumb_id_div = div_text
        this.thumb_img_div = div_img
        this.thumb_div = div

    }

    fromJson(j)
    {
        this.id = j.i
        this.unlinked = true

    }

    fromFolder(folder,path,outerfolder)
    {
        this.id = folder;
        this.path = path;
        _assets.push(this)
        delete this.unlinked; 
    }

    thumb_html()
    {

        return this.thumb_div
    }

    on_click()
    {
        console.log("OK")
        this.select_toggle()
    }

    select_toggle()
    {
        this.selected = !this.selected
        this.update_selected()
    }
    select_asset(bSelect)
    {
        this.selected = bSelect
        this.update_selected()
    }

    update_selected()
    {
        if(this.selected==true)
        {
            this.thumb_div.classList.add("selected")
        }
        else
        {
           this.thumb_div.classList.remove("selected") 
        }
    }

    show()
    {
        if(this.img_loaded==false)
        {
            this.img_loaded=true;

            const fs = require('fs')

            let img_path = this.path+"/thumb.gif"
            if (!fs.existsSync(img_path)) {
                img_path = this.path+"/thumb.jpg"
            }

            var img = new Image(),
            container = this.thumb_img_div
            img.onload = function () { container.appendChild(img); };
            img.src = img_path;

        }

        this.thumb_div.style.display = "block"
    }

    hide()
    {
        this.thumb_div.style.display = "none"
    }

    html()
    {
        this.thumb_id_div.innerHTML = this.id
        return this.thumb_div
    }
}



function load_sublib_dir(root_path,folder)
{
    var fs = require('fs')

    full_path = root_path+'/'+folder

    let found = fs.readdirSync(full_path)
    let L = found.length
    let path    
    let cur

    for(let i=0;i<L;i++)
    {
        cur = found[i]
        path = full_path+'/'+cur
        if(fs.lstatSync(path).isDirectory())
        {   

            let L = _assets.length

            let bFound = -1
            for(let i=0;i<L;i++)
            {
                if(_assets[i].id==cur)
                {
                    bFound = i;
                }
                break
            }

            if(bFound != -1)
            {
                console.log("FOUND ONE")
            }   
            else
            {
                let asset = new asset_c()
                asset.fromFolder(cur,path,folder)
            }            
        }
    }

}


exports.load_library = function (doc_path)
{
    console.log("Loading Library")    
    _assets = []

    var fs = require('fs')
    let content = fs.readFileSync(doc_path, {encoding: 'utf8'});
    let doc = JSON.parse(content)
    console.log(doc)


    let assets = doc.assets
    let L = assets.length
    
    assets.forEach(function(jdata) {
        let asset = new asset_c()
        asset.fromJson(jdata)   
        _assets.push(asset)
    });

    let root_dir = doc.assetlib

    let found = fs.readdirSync(root_dir)
    L = found.length
    let path

    for(let i=0;i<L;i++)
    {
        path = root_dir+'/'+found[i]
        if(fs.lstatSync(path).isDirectory())
        {
            load_sublib_dir(root_dir,found[i])
        }
    }

    _assets.forEach(function(asset) {
        if(asset.path)
        {
            _valid_assets.push(asset)
        }
    });

    console.log(_assets)
}

exports.get_assets = function ()
{
    return _assets
}

exports.get_valid_assets = function ()
{
    return _valid_assets
}







exports.output_dzdoc = function ()
{
    let doc = "" 
    doc += '<ContentDirectoryManager VERSION="1.0">\n'
    doc += '<ContentSet LABEL="DzLIB">\n  <ClusterDirectories/>\n  <CloudDirectories/>\n  <NativeDirectories>\n'

    let L = _valid_assets.length
    for(i=0;i<L;i++)
    {

        if(_valid_assets[i].selected==true)
        {
            let div
            let asset_path = _valid_assets[i].path.replace("&", "&amp;")

            doc+='   <Directory PATH="'+asset_path+'" ACTIVE="true"/>\n'
        }
    }

    doc += '   </NativeDirectories>\n  <ImportDirectories/>\n  <PoserDirectories/>\n </ContentSet>\n'
    doc += '</ContentDirectoryManager>\n'


    console.log(doc)

    var fs = require('fs')
    var jspath = require('path')
    const os = require('os')

    let CmsPath = 'C:\\Users\\'+os.userInfo().username+'\\AppData\\Roaming\\DAZ 3D\\Studio4\\ContentDirectoryManager.dsx'
    console.log('SAVING TO: '+CmsPath)

    fs.writeFileSync(CmsPath, doc, { mode: 0o666 })
}
