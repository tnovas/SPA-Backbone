var ProductsView = require('../products/ProductsView'),
	HomeView = require('../home/HomeView'),
	ContactView = require('../Contact/ContactView'),
	LoginView = require('../Login/LoginView');

var layoutView;

module.exports = Backbone.Marionette.LayoutView.extend({
	id: 'main-layout',

	template: require('../templates/layout/mainLayout'),

	regions: {
		banner: "header[role=banner]",
		mainContent: ".panel-body",
		footer: "footer[role=contentinfo]"
	},

	ui: {
		cultureDropBox: 'ul[role=menu] li',
		title: 'h3[class=panel-title]',
		searchDiv: 'div[role=search]',
		searchButton: 'div[role=search] button',
		searchText: 'div[role=search] input'
	},

	events: {
    	'click @ui.cultureDropBox': 'changeCulture',
    	'click @ui.searchButton': 'searchProducts',
    	'keyup @ui.searchText': 'searchProducts'
  	},

  	initialize: function(options) {
  		layoutView = this;
		this.setLang = options.language;
	},

	searchProducts: function(){
		this.products.filterCollection(this.ui.searchText.val());
	},

	changeCulture: function(data){
  		var element = $(data.target);
  		this.ui.cultureDropBox.removeClass('active');
  		element.parent().addClass('active');
  		this.setLang(element.attr('culture'));
  	},

	showHome: function(){
		this.showSearch();
		var home = new HomeView();
		this.changeTitle(home.title);
		this.mainContent.show(home);
	},

	showProducts: function(){
		this.hideSearch();
		this.products = new ProductsView();
		this.changeTitle(this.products.title);
		this.mainContent.show(this.products);
	},

	showContact: function(){
		this.showSearch();
		var contacts = new ContactView();
		this.changeTitle(contacts.title);
		this.mainContent.show(contacts);
	},

	showAdmin: function(login){
		layoutView.model = login;
	},

	showLogin: function(){
		this.showSearch();
		var login = new LoginView();
		login.layout = this.showAdmin;
		this.changeTitle(login.title);
		this.mainContent.show(login);
	},

	showSearch: function(){
		this.ui.searchDiv.addClass('sr-only');
	},

	hideSearch: function(){
		this.ui.searchDiv.removeClass('sr-only');
	},

	changeTitle: function(title){
		this.ui.title.attr('data-abjson', title);
	}
});