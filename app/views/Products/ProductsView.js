var ProductTemplate = require('../templates/products/Product'),
  ProductsTemplate = require('../templates/products/Products');

//var productsCollection;

var view = Backbone.Marionette.ItemView.extend({
  template: ProductTemplate,
  className: 'col-md-4',

  onRender: function(){
    // el filtro setea la propiedad "hide" en el model cuando
    // tiene que estar oculto de la busqueda

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
