var ContactTemplate = require('./templates/Contact');

module.exports = Backbone.Marionette.ItemView.extend({
	template: ContactTemplate,
	title: 'index.contact',
});