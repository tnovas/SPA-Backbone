var ProductsView = require('../products/ProductsView'),
	HomeView = require('../home/HomeView'),
	ContactView = require('../Contact/ContactView');

module.exports = Backbone.Marionette.LayoutView.extend({

	id: 'main-layout',

	template: require('../templates/layout/mainLayout'),

	regions: {
		banner: "header[role=banner]",
		mainContent: ".panel-body",
		footer: "footer[role=contentinfo]"
	},

	onRender: function(){
		this.showHome();
	},

	showHome: function(){
		this.mainContent.show(new HomeView());
	},

	showProducts: function(){
		this.mainContent.show(new ProductsView());
	},

	showContact: function(){
		this.mainContent.show(new ContactView());
	}
});