var Products = require('../../models/products/product');

module.exports = function(callback){
	Backbone.ajax({
	    dataType: "json",
	    url: "api/products",
	    async: true,
	    success: function(data){
	        callback(new Products(data));
	    }
	});
}; 
