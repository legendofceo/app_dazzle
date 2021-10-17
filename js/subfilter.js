
class subfilter
{
    constructor(title)
    {
        this.title = title
    }

    set_filter(filter)
    {
        this.filter = filter
    }
    set_click(fn)
    {
        this.click_fn = fn.bind(this,this)
    }
}

class subfilter_bool extends subfilter
{
    constructor(title)
    {
        super(title)
        this.on = false;
    }

    on_click()
    {
        this.on = !this.on

        if(this.on)
        {
            this.div.classList.add("ON")
        }
        else
        {
           this.div.classList.remove("ON") 
        }
        this.click_fn()
    }

    set_click(fn)
    {
        this.click_fn = fn.bind(this,this)
    }

    html()
    {
        let div = document.createElement("div")
        div.classList.add("subfilter")

        let bg = document.createElement("div")
        bg.classList.add("subfilter_bg")

        let textdiv = document.createElement("div")
        textdiv.classList.add("subfilter_text")

        bg.appendChild(textdiv)

        textdiv.innerHTML = this.title
        div.appendChild(bg)
        this.div = div
        this.div.addEventListener("click",this.on_click.bind(this))
        return div
    }
}

class subfilter_tag extends subfilter_bool
{
    constructor(title,tag,invert)
    {
        super(title)
        this.tag = tag
        this.invert = invert
    }

    matches(asset)
    {
        if(this.on)
        {
            if(asset.categories[this.filter.category].tag[this.tag]==!this.invert)
            {
                return true
            }
        }
        return false
    }
}


class subfilter_all extends subfilter_bool
{
    constructor(title)
    {
        super(title)
    }

    matches(asset)
    {

        if(this.on)
        {

            if(asset.categories[this.filter.category])
            {
                console.log("subfilter.js 79")
                return true
            }
        }
        return false
    }
}

exports.tag = function(title,tag,invert) {

 	return new subfilter_tag(title,tag,invert)
}


exports.all = function(title) {

    return new subfilter_all(title)
}
