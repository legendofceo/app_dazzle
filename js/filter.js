
class filter
{
    constructor(text,category)
    {
        this.text = text
        this.category = category
        this.on = false

        this.subfilters = []

        let div = document.createElement("div")
        div.classList.add("category_filter")

        let bg = document.createElement("div")
        bg.classList.add("category_filter_bg")

        let textdiv = document.createElement("div")
        textdiv.classList.add("category_filter_text")

        bg.appendChild(textdiv)

        textdiv.innerHTML = this.text
        div.appendChild(bg)
        this.filter_div = div

        this.filter_div.addEventListener("click",this.on_click.bind(this))
    }

    add_subfilter(subfilter)
    {
        subfilter.set_filter(this)
        this.subfilters.push(subfilter)
    }

    on_click()
    {
        this.on = !this.on

        if(this.on)
        {
         this.filter_div.classList.add("ON")
        }
        else
        {
           this.filter_div.classList.remove("ON") 
        }
        this.click_fn()
    }

    set_click(fn)
    {
        this.click_fn = fn.bind(this,this)
    }

    html()
    {
        return this.filter_div
    }

    matches_filter(asset)
    {
        if(asset.categories[this.category])
        {
            return true;
        }
        
        return false
    }

    matches_subfilters(asset)
    {
        let bMatch = false

        let L = this.subfilters.length
        for(let i=0;i<L;i++)
        {
            if(this.subfilters[i].matches(asset))
            {
                return true
            }
        }

        return false
    }


    build()
    {

    }

    subfilter_show()
    {
        this.subfilter_div.style.display="block"
    }
    
    subfilter_hide()
    {
        this.subfilter_div.style.display="none"
    }

    subfilter_html()
    {
        let div = document.createElement("div")
        div.classList.add("subfilter_container")

        let header = document.createElement("div")
        header.classList.add("subfilter_container_header")

        let header_text = document.createElement("div")
        header_text.classList.add("subfilter_container_header_text")

        let subfilter_holder = document.createElement("div")


        header_text.innerHTML = this.text
        header.appendChild(header_text)
        div.appendChild(header)
        div.appendChild(subfilter_holder)

        this.subfilter_div = div

        this.subfilters.forEach(function(sf) {
            
            subfilter_holder.appendChild(sf.html())
        });


        return div
    }
    
}

exports.new = function(title,category) {

 	return new filter(title,category)
}
