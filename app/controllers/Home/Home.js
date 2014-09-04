var Home = require('../../models/home/home');

module.exports = function(callback){
	Backbone.ajax({
	    dataType: "json",
	    url: "api/home",
	    async: true,
	    success: function(data){	    	
    		callback(new Home(data));	
	    }
	});
}; 
