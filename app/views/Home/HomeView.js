var HomeTemplate = require('../templates/home/home');

module.exports = Backbone.Marionette.ItemView.extend({
  tagName: 'p',
  template: HomeTemplate,
  title: 'index.home',

  modelEvents: {
    "change": "render"
  },

});