var Home = require('../../models/home/home');

module.exports = function(){
	var home;
	
	Backbone.ajax({
	    dataType: "json",
	    url: "api/home",
	    async: false,
	    success: function(val){	    	
    		home = new Home(val);	
	    }
	});

	return home;
}; 
