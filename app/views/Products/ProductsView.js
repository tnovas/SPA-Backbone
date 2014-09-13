var ProductTemplate = require('../templates/products/Product'),
  ProductsTemplate = require('../templates/products/Products');

var productsCollection;

var view = Backbone.Marionette.ItemView.extend({
	template: ProductTemplate,
	className: 'col-md-4'
});

module.exports = Backbone.Marionette.CompositeView.extend({
	template: ProductsTemplate,
	childViewContainer: "div.row.productos",
	childView: view,
	title: 'index.products',

	initialize: function(){
		productsCollection = this;
		require('../../controllers/products/products')(this.setCollection);
	},

	setCollection: function(data){
		productsCollection.collection = data;
		productsCollection.collectionFilter = data.clone();
		productsCollection.render();
	},

	filterCollection: function(data){
		var textFilter = data;
		if (textFilter === ''){
			this.collection = this.collectionFilter.clone();
		}
		else{
			var filter = this.collectionFilter.filter(function(model) {
				return model.get('title').toLowerCase().indexOf(textFilter.toLowerCase()) !== -1; 
			});

			this.collection.reset(filter);	
		}

		this.render();
	}
});
