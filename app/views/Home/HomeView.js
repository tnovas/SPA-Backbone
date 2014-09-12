var HomeTemplate = require('../templates/home/home');

module.exports = Backbone.Marionette.ItemView.extend({
	tagName: 'p',
	template: HomeTemplate,
	title: 'index.home',

	initialize: function(){
		var itemView = this;

		function callbacks(data){
			itemView.model = data;
			itemView.render();	
		}

		require('../../controllers/home/home')(callbacks);
	}
});