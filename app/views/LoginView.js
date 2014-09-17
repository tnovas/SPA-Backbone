var LoginTemplate = require('./Templates/Login'),
    UserModel = require('../models/User');

module.exports = Backbone.Marionette.ItemView.extend({
  template: LoginTemplate,
  title: 'index.admin',

  ui: {
    email: 'input[type=text]',
    password: 'input[type=password]',
  },

  events: {
    "click button": "login"
  },

  login: function(){
    var login = {
      email: this.ui.email.val(),
      password: this.ui.password.val()
    };

    require('../controllers/login').call(this, login);
  },

  setUser: function(data){
    this.layout(new UserModel(data));
  }

});