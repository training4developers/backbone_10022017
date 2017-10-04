(function(window, $, Backbone, _) {

  if (!window.App) {
    window.App = {};
  }

  if (!window.App.Views) {
    window.App.Views = {};
  }

  window.App.Views.CarForm = Backbone.View.extend({

    tagName: 'form',

    events: {
      'click #add-car-button': 'addCar',
    },

    addCar() {
      console.log('clicked add car');
    },

    template: function(data) {
      
      var templateStr = $('#car-form-template').html();

      if (!this._compiledTemplate) {
        this._compiledTemplate = _.template(templateStr);
      }

      return this._compiledTemplate(data);
    },

    render: function() {
      this.$el.append(this.template({}));
      return this.$el;
    }
    

  });

})(window, $, Backbone, _)