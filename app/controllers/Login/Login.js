module.exports = function(data){
	Backbone.ajax({
	    dataType: "json",
	    url: "api/login",
	    data: data,
	    async: true,
	    success: function(){	    	
    		console.log('Login :)');
	    }
	});
}; 
