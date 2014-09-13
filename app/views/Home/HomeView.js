var HomeTemplate = require('../templates/home/home');

var home;

module.exports = Backbone.Marionette.ItemView.extend({
	tagName: 'p',
	template: HomeTemplate,
	title: 'index.home',

	initialize: function(){
		home = this;
		require('../../controllers/home/home')(this.setHome);
	},

	setHome: function(data){
		home.model = data;
		home.render();	
	}
});