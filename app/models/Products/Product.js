var product = Backbone.Model.extend({
	defaults: {
		title: '',
		description: '',
		image: ''
	}
});

module.exports = Backbone.Collection.extend({
	model: product
});