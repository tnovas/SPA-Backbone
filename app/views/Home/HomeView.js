var HomeTemplate = require('../templates/home/home');

module.exports = Backbone.Marionette.ItemView.extend({
	tagName: 'p',
	template: HomeTemplate,

	initialize: function(){
		this.model = require('../../controllers/home/home')();
	}
});