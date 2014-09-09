var ProductsView = require('../products/ProductsView'),
	HomeView = require('../home/HomeView'),
	ContactView = require('../Contact/ContactView'),
	AdminView = require('../Admin/AdminView');

module.exports = Backbone.Marionette.LayoutView.extend({

	id: 'main-layout',

	template: require('../templates/layout/mainLayout'),

	regions: {
		banner: "header[role=banner]",
		mainContent: ".panel-body",
		footer: "footer[role=contentinfo]"
	},

	ui: {
		cultureDropBox: 'ul[role=menu] li'
	},

	events: {
    	'click @ui.cultureDropBox': 'changeCulture'
  	},

  	initialize: function(options) {
		this.setLang = options.language;
	},

  	changeCulture: function(data){
  		var element = $(data.target);
  		this.ui.cultureDropBox.removeClass('active');
  		element.parent().addClass('active');
  		this.setLang(element.attr('culture'));
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
	},

	showAdmin: function(){
		this.mainContent.show(new AdminView());
	}
});