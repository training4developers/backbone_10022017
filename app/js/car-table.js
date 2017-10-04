(function(window, $, Backbone, _) {
  
    if (!window.App) {
      window.App = {};
    }
  
    if (!window.App.Views) {
      window.App.Views = {};
    }
  
    window.App.Views.CarTable = Backbone.View.extend({
      tagName: 'div',

      events: {
        'click #add-car-button': 'addCar',
      },

      addCar: function() {
        this.trigger('show-car-form');
      },

      render: function() {

        var tbody = $('<tbody>');

        this.collection.forEach(function(car) {
    
          var makeCol = $('<td>');
          makeCol.text(car.get('make'));
    
          var modelCol = $('<td>');
          modelCol.text(car.get('model'));
    
          var yearCol = $('<td>');
          yearCol.text(car.get('year'));
    
          var colorCol = $('<td>');
          colorCol.text(car.get('color'));
    
          var priceCol = $('<td>');
          priceCol.text(car.formattedPrice());
    
          var carRow = $('<tr>');
          carRow.append(makeCol);
          carRow.append(modelCol);
          carRow.append(yearCol);
          carRow.append(colorCol);
          carRow.append(priceCol);
    
          tbody.append(carRow);
        });

        var makeHeader = $('<th>Make</th>');
        var modelHeader = $('<th>Model</th>');
        var yearHeader = $('<th>Year</th>');
        var colorHeader = $('<th>Color</th>');
        var priceHeader = $('<th>Price</th>');

        var headerRow = $('<tr>');
        headerRow.append(makeHeader);
        headerRow.append(modelHeader);
        headerRow.append(yearHeader);
        headerRow.append(colorHeader);
        headerRow.append(priceHeader);

        var thead = $('<thead>');
        thead.append(headerRow);

        var table = $('<table>');
        table.append(thead);
        table.append(tbody);

        this.$el.append(table)
        this.$el.append('<button id="add-car-button">Add Car</button>');
        
        return this.$el;

      }

    });
  
  })(window, $, Backbone, _);