(function(window, $) {

  var cars = [
    { id: 1, make: 'Ford', model: 'Fusion', year: 2017, color: 'blue', price: 25000 },
  ];

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

  $('#add-car-button').on('click', function() {

    cars.push({
      id: Math.max.apply(null, cars.map(function(car) {
        return car.id
      })) + 1,
      make: $('#make-input').val(),
      model: $('#model-input').val(),
      year: $('#year-input').val(),
      color: $('#color-input').val(),
      price: $('#price-input').val(),
    });

    console.log(cars);

  });



})(window, $);