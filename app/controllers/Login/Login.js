module.exports = function(data, callback){
	Backbone.ajax({
	    dataType: "json",
	    url: "api/login",
	    data: data,
	    async: true,
	    success: function(data){	    	
    		callback(data);
	    }
	});
}; 
