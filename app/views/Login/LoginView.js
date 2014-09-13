var LoginTemplate = require('../Templates/Login/Login'),
    UserModel = require('../../models/User/User');
    
var loginView;

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
        loginView = this;
        var login = {
            email: this.ui.email.val(),
            password: this.ui.password.val()
        };

        require('../../controllers/login/login')(login, this.setUser);    	
    },

    setUser: function(data){
        loginView.layout(new UserModel(data));
    }
});