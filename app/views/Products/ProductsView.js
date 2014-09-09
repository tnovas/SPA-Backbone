var ProductTemplate = require('../templates/products/Product'),
  ProductsTemplate = require('../templates/products/Products');

var view = Backbone.Marionette.ItemView.extend({
	template: ProductTemplate,
	className: 'col-md-4'
});

module.exports = Backbone.Marionette.CompositeView.extend({
	template: ProductsTemplate,
	childViewContainer: "div.row.productos",
	childView: view,

	initialize: function(){
		var itemView = this;

		function callbacks(data){
			itemView.collection = data;
			itemView.render();
		}

		require('../../controllers/products/products')(callbacks);
	}
});
