var LoginTemplate = require('../Templates/Login/Login'),
	LoginModel = require('../../Models/Login/Login');

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
        var login = new LoginModel({
            email: this.ui.email.val(),
            password: this.ui.password.val()
        });

        require('../../controllers/login/login')(login.attributes);    	
    }
});