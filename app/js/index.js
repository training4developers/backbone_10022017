(function(window, $, Backbone, _) {

  // $.ajax('http://localhost:3000/widgets/2', {
  //   success: function(result) {
  //     console.log('made ajax call');
  //     console.log('result:', result);
  //   },
  // });

  var cars = new App.Collections.Cars();

  cars.fetch({
    success: function() {
      var controller = new Controller();
    },
  });

  // cars.add(new App.Models.Car({
  //   id: 1,
  //   make: 'Ford',
  //   model: 'Fusion',
  //   year: 2017,
  //   color: 'blue',
  //   price: 25000
  // }));

  var pageHeader = new App.Views.PageHeader();
  $('main').append(pageHeader.render());

  function Controller() {

    var controller = this;

    function showTable() {

      if (controller.currentView) {
        controller.currentView.remove();
      }

      controller.currentView = new App.Views.CarTable({
        collection: cars,
      });
      $('main').append(controller.currentView.render());

      controller.currentView.once('show-car-form', showForm);
    }

    function showForm() {

      if (controller.currentView) {
        controller.currentView.remove();
      }

      controller.currentView = new App.Views.CarForm({});
      $('main').append(controller.currentView.render());

      controller.currentView.once('car-submitted', function(newCar) {
        newCar.id = Math.max.apply(null, cars.map(car => car.id)) + 1;
        cars.add(new App.Models.Car(newCar));
        
        showTable();
      });
      
    }

    showTable();
  }

})(window, $, Backbone, _);