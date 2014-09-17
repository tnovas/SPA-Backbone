module.exports = function(data){
	var me = this;
	Backbone.ajax({
	    dataType: "json",
	    url: "api/login",
	    data: data,
	    async: true,
	    success: function(data){	    	
    		me.setUser(data);
	    }
	});
}; 
