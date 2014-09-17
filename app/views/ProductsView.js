var ProductTemplate = require('./templates/Product'),
  ProductsTemplate = require('./templates/Products');

var view = Backbone.Marionette.ItemView.extend({
  template: ProductTemplate,
  className: 'col-md-4',

  onRender: function(){
    if (this.model.hide){
      this.$el.hide();
    }
    else {
      this.$el.show(); 
    }
  }

});

module.exports = Backbone.Marionette.CompositeView.extend({
  template: ProductsTemplate,
  childViewContainer: "div.row.productos",
  childView: view,
  title: 'index.products',

  ui: {
    searchText: 'div[role=search] input'
  },

  events: {
    'keyup @ui.searchText': 'filterCollection'
  },

  filterCollection: function(){
    var textFilter = this.ui.searchText.val();    
    this.collection.filter(textFilter);
  }
});
