module.exports = Backbone.Router.extend({
	routes: {
		'': 'home',
		'inicio': 'home',
		'productos': 'products',
		'contacto': 'contact',
		'admin': 'admin',
		'login': 'login'
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
	},

	admin: function(){
		this.app.layout.showAdmin();
	},

	login: function(){
		this.app.layout.showLogin();
	}
});