var LayoutView = require('./views/layout/LayoutView'),
	Routers = require('./routers/RouterApp');

var app = module.exports = new Backbone.Marionette.Application();

app.addInitializer(function(){

	app.addRegions({
		container: 'body'
	});

	app.layout = new LayoutView();

	app.container.show(app.layout);

	app.router = new Routers({
		app: app
	});

	Backbone.history.start();

	Backbone.history.on("all", function () {
    	var active = $('ul.nav.navbar-nav li [href="#/' + Backbone.history.fragment + '"]').parent();
		var noActive = $('ul.nav.navbar-nav li').not(active);
		active.addClass('active');
		noActive.removeClass('active');

		var routeName = Backbone.history.fragment;
		$('.panel-title').text(routeName.charAt(0).toUpperCase() + routeName.slice(1));
	});
});