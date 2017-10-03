(function(window, $, Backbone, _) {

  var cars = [];
  var carTable = {};

  _.extend(cars, Backbone.Events);
  _.extend(carTable, Backbone.Events);
  
  cars.on('add-car', function(newCar) {
    console.log('adding car', newCar);
  });

  carTable.listenTo(cars, 'add-car', function(newCar) {
    console.log('refreshing car table', newCar);
  });

  cars.trigger('add-car', { make: 'Ford' });
  

})(window, $, Backbone, _);