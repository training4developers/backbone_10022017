(function(window, $, Backbone, _) {

  if (!window.App) {
    window.App = {};
  }

  if (!window.App.Models) {
    window.App.Models = {};
  }

  window.App.Models.Car = Backbone.Model.extend({
    
      defaults: {
        make: '',
        model: '',
        year: 2018,
        color: '',
        price: 0,
      },
  
      formattedPrice: function() {
        return '$' + this.get('price');
      }
  
    });

})(window, $, Backbone, _);