var product = Backbone.Model.extend({
	defaults: {
		title: '',
		description: '',
		image: ''
	}
});

module.exports = Backbone.Collection.extend({
	model: product,
  url: "api/products",

  filter: function(keyword){

    // busca sobre si misma (collection) donde el filtro esta o no
    // asigna la propiedad hide de la instancia del modelo
    // >> la INSTANCIA no el model, para que no interfiera con el modelo en si

    this.each(function(product){
      var title = product.get('title').toLowerCase();

      product.hide = false;
      
      if (keyword && title.indexOf(keyword.toLowerCase()) === -1){
        product.hide = true;
      }
    });

    // Dispara un "reset" al terminar para que la vista se re-renderize
    this.trigger("reset");
  }

});
