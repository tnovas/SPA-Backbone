var Products = require('../../models/products/product');

module.exports = function(){
	var products;

	Backbone.ajax({
	    dataType: "json",
	    url: "api/products",
	    async: false,
	    success: function(val){
	        products = new Products(val);
	    }
	});

	return products;
}; 
