(function(window, $, Backbone, _) {

  var cars = [
    { id: 1, make: 'Ford', model: 'Fusion', year: 2017, color: 'blue', price: 25000 },
  ];

  _.extend(cars, Backbone.Events);

  cars.on('add-car', function(newCar) {

    newCar.id =  Math.max.apply(null, cars.map(function(car) {
      return car.id
    })) + 1;

    cars.push(newCar);
  });



  var carTable = _.extend({}, Backbone.Events);

  carTable.listenTo(cars, 'add-car', function() {
    refreshCarTable(cars);
  });

  function refreshCarTable(cars) {

    $('tbody').empty();

    cars.forEach(function(car) {

      var makeCol = $('<td>');
      makeCol.text(car.make);

      var modelCol = $('<td>');
      modelCol.text(car.model);

      var yearCol = $('<td>');
      yearCol.text(car.year);

      var colorCol = $('<td>');
      colorCol.text(car.color);

      var priceCol = $('<td>');
      priceCol.text(car.price);

      var carRow = $('<tr>');
      carRow.append(makeCol);
      carRow.append(modelCol);
      carRow.append(yearCol);
      carRow.append(colorCol);
      carRow.append(priceCol);

      $('tbody').append(carRow);
    });

  }



  $('#add-car-button').on('click', function () {
    
    cars.trigger('add-car', {
      make: $('#make-input').val(),
      model: $('#model-input').val(),
      year: $('#year-input').val(),
      color: $('#color-input').val(),
      price: $('#price-input').val(),
    });

  });


  refreshCarTable(cars);

})(window, $, Backbone, _);