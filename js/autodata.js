var CATEGORY = require(__dirname+'/category.js')

function autodata(asset)
{
    if(asset.path)
    {    
        var arr = asset.path.split('/');
        var folder = arr[arr.length-2] || arr[arr.length-3];

        if(folder=="anim")
        {
            let c = CATEGORY.anim()
            asset.categories.anim = c
        }

        else if(folder=="animal")
        {
            let c = CATEGORY.animal()
            asset.categories.animal = c
        }




        else if(folder=="body f8")
        {
            let c = CATEGORY.body()
            c.tag.f8 = true;
            asset.categories.body = c
        }

        else if(folder=="body f3")
        {
            let c = CATEGORY.body()
            c.tag.f3 = true;
            asset.categories.body = c
        }

        else if(folder=="body f2")
        {
            let c = CATEGORY.body()
            c.tag.f2 = true;
            asset.categories.body = c
        }

        else if(folder=="body f1")
        {
            let c = CATEGORY.body()
            c.tag.f1 = true;
            asset.categories.body = c
        }

        else if(folder=="body m8")
        {
            let c = CATEGORY.body()
            c.tag.m8 = true;
            asset.categories.body = c
        }

        else if(folder=="body m3")
        {
            let c = CATEGORY.body()
            c.tag.m3 = true;
            asset.categories.body = c
        }

        else if(folder=="body m2")
        {
            let c = CATEGORY.body()
            c.tag.m2 = true;
            asset.categories.body = c
        }

        else if(folder=="body m1")
        {
            let c = CATEGORY.body()
            c.tag.m1 = true;
            asset.categories.body = c
        }






        else if(folder=="clothes f8")
        {
            let c = CATEGORY.clothes()
            c.tag.f8 = true;
            asset.categories.clothes = c
        }

        else if(folder=="clothes f3")
        {
            let c = CATEGORY.clothes()
            c.tag.f3 = true;
            asset.categories.clothes = c
        }

        else if(folder=="clothes f2")
        {
            let c = CATEGORY.clothes()
            c.tag.f2 = true;
            asset.categories.clothes = c
        }

        else if(folder=="clothes f1")
        {
            let c = CATEGORY.clothes()
            c.tag.f1 = true;
            asset.categories.clothes = c
        }

        else if(folder=="clothes m8")
        {
            let c = CATEGORY.clothes()
            c.tag.m8 = true;
            asset.categories.clothes = c
        }

        else if(folder=="clothes m3")
        {
            let c = CATEGORY.clothes()
            c.tag.m3 = true;
            asset.categories.clothes = c
        }

        else if(folder=="clothes m2")
        {
            let c = CATEGORY.clothes()
            c.tag.m2 = true;
            asset.categories.clothes = c
        }

        else if(folder=="clothes m1")
        {
            let c = CATEGORY.clothes()
            c.tag.m1 = true;
            asset.categories.clothes = c
        }



       else if(folder=="effects")
        {
            let c = CATEGORY.effects()
            asset.categories.effects = c
        }


        else if(folder=="environment")
        {
            let c = CATEGORY.environment()
            asset.categories.environment = c
        }







    else if(folder=="expression f8")
        {
            let c = CATEGORY.expression()
            c.tag.f8 = true;
            asset.categories.expression = c
        }

        else if(folder=="expression f3")
        {
            let c = CATEGORY.expression()
            c.tag.f3 = true;
            asset.categories.expression = c
        }

        else if(folder=="expression f2")
        {
            let c = CATEGORY.expression()
            c.tag.f2 = true;
            asset.categories.expression = c
        }

        else if(folder=="expression f1")
        {
            let c = CATEGORY.expression()
            c.tag.f1 = true;
            asset.categories.expression = c
        }

        else if(folder=="expression m8")
        {
            let c = CATEGORY.expression()
            c.tag.m8 = true;
            asset.categories.expression = c
        }

        else if(folder=="expression m3")
        {
            let c = CATEGORY.expression()
            c.tag.m3 = true;
            asset.categories.expression = c
        }

        else if(folder=="expression m2")
        {
            let c = CATEGORY.expression()
            c.tag.m2 = true;
            asset.categories.expression = c
        }

        else if(folder=="expression m1")
        {
            let c = CATEGORY.expression()
            c.tag.m1 = true;
            asset.categories.expression = c
        }












    else if(folder=="eye f8")
        {
            let c = CATEGORY.eye()
            c.tag.f8 = true;
            asset.categories.eye = c
        }

        else if(folder=="eye f3")
        {
            let c = CATEGORY.eye()
            c.tag.f3 = true;
            asset.categories.eye = c
        }

        else if(folder=="eye f2")
        {
            let c = CATEGORY.eye()
            c.tag.f2 = true;
            asset.categories.eye = c
        }

        else if(folder=="eye f1")
        {
            let c = CATEGORY.eye()
            c.tag.f1 = true;
            asset.categories.eye = c
        }

        else if(folder=="eye m8")
        {
            let c = CATEGORY.eye()
            c.tag.m8 = true;
            asset.categories.eye = c
        }

        else if(folder=="eye m3")
        {
            let c = CATEGORY.eye()
            c.tag.m3 = true;
            asset.categories.eye = c
        }

        else if(folder=="eye m2")
        {
            let c = CATEGORY.eye()
            c.tag.m2 = true;
            asset.categories.eye = c
        }

        else if(folder=="eye m1")
        {
            let c = CATEGORY.eye()
            c.tag.m1 = true;
            asset.categories.eye = c
        }






    else if(folder=="figure f8")
        {
            let c = CATEGORY.figure()
            c.tag.f8 = true;
            asset.categories.figure = c
        }

        else if(folder=="figure f3")
        {
            let c = CATEGORY.figure()
            c.tag.f3 = true;
            asset.categories.figure = c
        }

        else if(folder=="figure f2")
        {
            let c = CATEGORY.figure()
            c.tag.f2 = true;
            asset.categories.figure = c
        }

        else if(folder=="figure f1")
        {
            let c = CATEGORY.figure()
            c.tag.f1 = true;
            asset.categories.figure = c
        }

        else if(folder=="figure m8")
        {
            let c = CATEGORY.figure()
            c.tag.m8 = true;
            asset.categories.figure = c
        }

        else if(folder=="figure m3")
        {
            let c = CATEGORY.figure()
            c.tag.m3 = true;
            asset.categories.figure = c
        }

        else if(folder=="figure m2")
        {
            let c = CATEGORY.figure()
            c.tag.m2 = true;
            asset.categories.figure = c
        }

        else if(folder=="figure m1")
        {
            let c = CATEGORY.figure()
            c.tag.m1 = true;
            asset.categories.figure = c
        }

        else if(folder=="figure cf8")
        {
            let c = CATEGORY.figure()
            c.tag.centaur = true;
            c.tag.f8 = true;
            asset.categories.figure = c
        }

        else if(folder=="figure misc")
        {
            let c = CATEGORY.figure()
            c.tag.misc = true;
            asset.categories.figure = c
        }











            else if(folder=="hair f8")
        {
            let c = CATEGORY.hair()
            c.tag.f8 = true;
            asset.categories.hair = c
        }

        else if(folder=="hair f3")
        {
            let c = CATEGORY.hair()
            c.tag.f3 = true;
            asset.categories.hair = c
        }

        else if(folder=="hair f2")
        {
            let c = CATEGORY.hair()
            c.tag.f2 = true;
            asset.categories.hair = c
        }

        else if(folder=="hair f1")
        {
            let c = CATEGORY.hair()
            c.tag.f1 = true;
            asset.categories.hair = c
        }

        else if(folder=="hair m8")
        {
            let c = CATEGORY.hair()
            c.tag.m8 = true;
            asset.categories.hair = c
        }

        else if(folder=="hair m3")
        {
            let c = CATEGORY.hair()
            c.tag.m3 = true;
            asset.categories.hair = c
        }

        else if(folder=="hair m2")
        {
            let c = CATEGORY.hair()
            c.tag.m2 = true;
            asset.categories.hair = c
        }

        else if(folder=="hair m1")
        {
            let c = CATEGORY.hair()
            c.tag.m1 = true;
            asset.categories.hair = c
        }











        else if(folder=="pose 2")
        {
            let c = CATEGORY.hair()
            c.tag.f2 = true;
            c.tag.m2 = true;
            asset.categories.pose = c
        }

        else if(folder=="pose 3")
        {
            let c = CATEGORY.hair()
            c.tag.f3 = true;
            c.tag.m3 = true;
            asset.categories.pose = c
        }

        else if(folder=="pose 8")
        {
            let c = CATEGORY.hair()
            c.tag.f8 = true;
            c.tag.m8 = true;
            asset.categories.pose = c
        }

        else if(folder=="pose f8")
        {
            let c = CATEGORY.hair()
            c.tag.f8 = true;
            asset.categories.pose = c
        }

        else if(folder=="pose m8")
        {
            let c = CATEGORY.hair()
            c.tag.m8 = true;
            asset.categories.pose = c
        }

        else if(folder=="pose sex 8")
        {
            let c = CATEGORY.hair()
            c.tag.f8 = true;
            c.tag.m8 = true;
            c.tag.sex = true;
            asset.categories.pose = c
        }

        else if(folder=="pose sex 8f")
        {
            let c = CATEGORY.hair()
            c.tag.f8 = true;
            c.tag.sex = true;
            asset.categories.pose = c
        }

    }
    
}

exports.autodata = function (asset) 
{
	autodata(asset)
}