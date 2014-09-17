var ProductsView = require('./ProductsView'),
  HomeView = require('./HomeView'),
  ContactView = require('./ContactView'),
  LoginView = require('./LoginView'),

  template = require('./templates/mainLayout');

var Home = require('../models/Home.js'),
  Products = require('../models/Product.js');

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
    this.setLang = options.language;
  },

  changeCulture: function(data){
    var element = $(data.target);
    this.ui.cultureDropBox.removeClass('active');
    element.parent().addClass('active');
    this.setLang(element.attr('culture'));
  },

  showHome: function(){    
    var homeModel = new Home();
    var home = new HomeView({
      model: homeModel
    });
    this.changeTitle(home.title);
    this.mainContent.show(home);
    homeModel.fetch({ 
      wait: true
    });
  },

  showProducts: function(){
    var productsColl = new Products();
    var products = new ProductsView({
      collection: productsColl
    });
    this.changeTitle(products.title);
    this.mainContent.show(products);
    productsColl.fetch({
      reset: true
    });
  },

  showContact: function(){
    var contacts = new ContactView();
    this.changeTitle(contacts.title);
    this.mainContent.show(contacts);
  },

  showAdmin: function(login){
    window.User = login;
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