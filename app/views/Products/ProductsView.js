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

	ui: {
		searchText: 'div[role=search] input'
	},

	events: {
    	'keyup @ui.searchText': 'filterCollection'
  	},

	initialize: function(){
		productsCollection = this;
		require('../../controllers/products/products')(this.setCollection);
	},

	setCollection: function(data){
		productsCollection.collection = data;
		productsCollection.collectionFilter = data.clone();
		productsCollection.render();
	},

	filterCollection: function(){
		var textFilter = this.ui.searchText.val();
		if (textFilter === ''){
			this.collection = this.collectionFilter.clone();
		}
		else{
			var filter = this.collectionFilter.filter(function(model) {
				return model.get('title').toLowerCase().indexOf(textFilter.toLowerCase()) !== -1; 
			});

			this.collection.remove(filter);
		}
	}
});
