var LayoutView = require('./views/layout/LayoutView'),
	Routers = require('./routers/RouterApp');

var app = module.exports = new Backbone.Marionette.Application();

app.addInitializer(function(){

	app.addRegions({
		container: 'body'
	});

	app.setLang = require('./helpers/language/lang');

	app.layout = new LayoutView({
		language: app.setLang
	});

	app.container.show(app.layout);

	app.router = new Routers({
		app: app
	});

	Backbone.history.start();

	Backbone.history.on("all", function () {
		var ulNavBar = $('ul[class="nav navbar-nav"] li');
		var routeName = Backbone.history.fragment;
    	var active = ulNavBar.find('[href="#/' + routeName + '"]').parent();
		var noActive = ulNavBar.not(active);
		active.addClass('active');
		noActive.removeClass('active');

		$('.panel-title').text(routeName.charAt(0).toUpperCase() + routeName.slice(1));
	});
});