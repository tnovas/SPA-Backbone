module.exports = Backbone.Router.extend({
	routes: {
		'inicio': 'home',
		'productos': 'products',
		'contacto': 'contact'
	},

	initialize: function(options) {
		this.app = options.app;
	},

	home: function() {
		this.app.layout.showHome();
	},

	products: function() {
		this.app.layout.showProducts();
	},

	contact: function() {
		this.app.layout.showContact();
	}
});