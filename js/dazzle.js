var ASSET = require(__dirname+'/asset.js')
var AUTODATA = require(__dirname+'/autodata.js')
var category = require(__dirname+'/category.js')
var filter = require(__dirname+'/filter.js')
var subfilter = require(__dirname+'/subfilter.js')

var autoload = true
var autoload_dir = 'Z:/Dz/_dzlib/data/lib.dazzle'

var _active_filters = []
var _assets_matching_current_filters = []


exports.operation = function (cmd) {
	if(cmd=="dzdoc_output")
	{
		ASSET.output_dzdoc()
	}
}



function filter_clicked(filter){

	if(filter.on)
	{
		_active_filters.push(filter)
		subfilter_div = document.getElementById("flags")
		filter.subfilter_show()

	}
	else
	{
		_active_filters.splice(_active_filters.indexOf(filter),1)
		filter.subfilter_hide()
	}

	get_assets_matching_current_filters()
}

function get_assets_matching_current_filters(){

	_assets_matching_current_filters = []


	ASSET.get_valid_assets().forEach(function(asset) {

 			asset.hide()
    });

 	_active_filters.forEach(function(filter) {

 		ASSET.get_valid_assets().forEach(function(asset) {
 			
 			if(filter.matches_filter(asset))
 			{
        		_assets_matching_current_filters.push(asset)
    		}
    	});
    });
}



Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};


function subfilter_clicked(filter){

	ASSET.get_valid_assets().forEach(function(asset) {

 			asset.hide()
    });


	let final_list = []
	let filter_list 

	_active_filters.forEach(function(f) {

	filter_list = []

		_assets_matching_current_filters.forEach(function(asset) {

			if(f.matches_filter(asset))
 			{
 				if(f.matches_subfilters(asset))
 				{
 					filter_list.push(asset)
 				}
 			}
		});	

		final_list = final_list.concat(filter_list).unique()
	});

	final_list.forEach(function(asset) {

			asset.show()
	});
}


exports.start = function () {

 	console.log("Dazzle Start.")
 	
 	fdiv = document.getElementById("filters")

 	let f
 	let sf
 	let filters = []

 	f = filter.new("Animations","anim")
 		sf = subfilter.all("All")
 		f.add_subfilter(sf)
 	filters.push(f)

 	f = filter.new("Body","body")
 		sf = subfilter.all("All")
 		f.add_subfilter(sf)
 	 	sf = subfilter.tag("F8","f8",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F3","f3",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F2","f2",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F1","f1",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M8","m8",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M3","m3",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M2","m2",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M1","m1",false)
 		f.add_subfilter(sf)
 	filters.push(f)

 	f = filter.new("Bodyparts","bodypart")
 		sf = subfilter.all("All")
 		f.add_subfilter(sf)
 	 	sf = subfilter.tag("F8","f8",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F3","f3",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F2","f2",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F1","f1",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M8","m8",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M3","m3",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M2","m2",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M1","m1",false)
 		f.add_subfilter(sf)
 	filters.push(f)

 	f = filter.new("Effects","effects")
 		sf = subfilter.all("All")
 		f.add_subfilter(sf)
 	filters.push(f)

 	f = filter.new("Environments","environment")
 		sf = subfilter.all("All")
 		f.add_subfilter(sf)
 	filters.push(f)



 	f = filter.new("Expressions","expression")
 		sf = subfilter.all("All")
 		f.add_subfilter(sf)
 	 	sf = subfilter.tag("F8","f8",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F3","f3",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F2","f2",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F1","f1",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M8","m8",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M3","m3",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M2","m2",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M1","m1",false)
 		f.add_subfilter(sf)
 	filters.push(f)



 	f = filter.new("Eyes","eye")
 		sf = subfilter.all("All")
 		f.add_subfilter(sf)
 	 	sf = subfilter.tag("F8","f8",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F3","f3",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F2","f2",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F1","f1",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M8","m8",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M3","m3",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M2","m2",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M1","m1",false)
 		f.add_subfilter(sf)
 	filters.push(f)





 	f = filter.new("Figures","figure")
 		sf = subfilter.all("All")
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F8","f8",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F3","f3",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F2","f2",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F1","f1",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M8","m8",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M3","m3",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M2","m2",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M1","m1",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("Centaur","centaur",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("Misc","misc",false)
 		f.add_subfilter(sf)

 	filters.push(f)

 	f = filter.new("Clothes","clothes")
 		sf = subfilter.all("All")
 		f.add_subfilter(sf)
 	 	sf = subfilter.tag("F8","f8",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F3","f3",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F2","f2",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F1","f1",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M8","m8",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M3","m3",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M2","m2",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M1","m1",false)
 		f.add_subfilter(sf)
 	filters.push(f)

 	 f = filter.new("Hair","hair")
 		sf = subfilter.all("All")
 		f.add_subfilter(sf)
 	 	sf = subfilter.tag("F8","f8",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F3","f3",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F2","f2",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F1","f1",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M8","m8",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M3","m3",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M2","m2",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M1","m1",false)
 		f.add_subfilter(sf)
 	filters.push(f)

 	 f = filter.new("Pose","pose")
 		sf = subfilter.all("All")
 		f.add_subfilter(sf)
 	 	sf = subfilter.tag("F8","f8",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F3","f3",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F2","f2",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("F1","f1",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M8","m8",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M3","m3",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M2","m2",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("M1","m1",false)
 		f.add_subfilter(sf)
 		sf = subfilter.tag("Sex","sex",false)
 		f.add_subfilter(sf)
 	filters.push(f)


	subfilter_div = document.getElementById("subfilters")
 	filters.forEach(function(f) {
 		f.build()
 		f.set_click(filter_clicked)
        fdiv.appendChild(f.html())
        subfilter_div.appendChild(f.subfilter_html())
        f.subfilter_hide()

        f.subfilters.forEach(function(sf) {
 			sf.set_click(subfilter_clicked)
    	});
    });


 	ASSET.load_library(autoload_dir)
 	

 	ASSET.get_valid_assets().forEach(function(asset) {
        AUTODATA.autodata(asset)
    });

	asset_div = document.getElementById("assets")

 	ASSET.get_valid_assets().forEach(function(asset) {
        	asset_div.appendChild(asset.html())
        	asset.hide()
    });
}