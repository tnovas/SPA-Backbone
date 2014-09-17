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

    this.each(function(product){
      var title = product.get('title').toLowerCase();

      product.hide = false;
      
      if (keyword && title.indexOf(keyword.toLowerCase()) === -1){
        product.hide = true;
      }
    });

    this.trigger("reset");
  }

});
