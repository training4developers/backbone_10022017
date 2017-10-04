(function(window, $, Backbone, _) {

  if (!window.App) {
    window.App = {};
  }

  if (!window.App.Collections) {
    window.App.Collections = {};
  }

  window.App.Collections.Cars = Backbone.Collection.extend({
    url: 'http://localhost:3000/cars',
    model: App.Models.Car,
  });

})(window, $, Backbone, _)