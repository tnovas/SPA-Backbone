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
		title: 'h3[class=panel-title]'
	},

	events: {
    	'click @ui.cultureDropBox': 'changeCulture'
  	},

  	initialize: function(options) {
  		layoutView = this;
		this.setLang = options.language;
	},

	changeCulture: function(data){
  		var element = $(data.target);
  		this.ui.cultureDropBox.removeClass('active');
  		element.parent().addClass('active');
  		this.setLang(element.attr('culture'));
  	},

	showHome: function(){
		var home = new HomeView();
		this.changeTitle(home.title);
		this.mainContent.show(home);
	},

	showProducts: function(){
		var products = new ProductsView();
		this.changeTitle(products.title);
		this.mainContent.show(products);
	},

	showContact: function(){
		var contacts = new ContactView();
		this.changeTitle(contacts.title);
		this.mainContent.show(contacts);
	},

	showAdmin: function(login){
		layoutView.model = login;
		console.log('Login :)');
	},

	showLogin: function(){
		var login = new LoginView();
		login.layout = this.showAdmin;
		this.changeTitle(login.title);
		this.mainContent.show(login);
	},

	changeTitle: function(title){
		this.ui.title.attr('data-abjson', title);
	}
});