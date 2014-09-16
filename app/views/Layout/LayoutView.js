var ProductsView = require('../products/ProductsView'),
  HomeView = require('../home/HomeView'),
  ContactView = require('../Contact/ContactView'),
  LoginView = require('../Login/LoginView'),

  template = require('../templates/layout/mainLayout');

// Models
var Home = require('../../models/Home/Home.js'),
  Products = require('../../models/Products/Product.js');

var layoutView;

module.exports = Backbone.Marionette.LayoutView.extend({
  id: 'main-layout',

  template: template,

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
    // Creo un model Home
    var homeModel = new Home();

    // Creo la vista y le paso el model
    var home = new HomeView({
      model: homeModel
    });

    this.changeTitle(home.title);
    this.mainContent.show(home);

    // Pido al server que llene el model
    homeModel.fetch({ 
      wait: true // le aviso que quiero que dispare un "change" cuando vuelva del server
    });
  },

  showProducts: function(){
    // Creo una collection Products
    var productsColl = new Products();

    // Creo la vista y le paso la collection
    var products = new ProductsView({
      collection: productsColl
    });

    this.changeTitle(products.title);
    this.mainContent.show(products);

    // Pido al server la collection
    productsColl.fetch({
      reset: true // le aviso que quiero que haga un "reset" cuando vuelva del server
    });
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