(function(window, $, Backbone, _) {

  
  var cars = new App.Collections.Cars();
  cars.add(new App.Models.Car({
    id: 1,
    make: 'Ford',
    model: 'Fusion',
    year: 2017,
    color: 'blue',
    price: 25000
  }));
    

  var pageHeader = new App.Views.PageHeader();
  $('main').append(pageHeader.render());

  var carTable = new App.Views.CarTable({
    collection: cars,
  });
  $('main').append(carTable.render());


})(window, $, Backbone, _);