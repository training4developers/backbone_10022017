// IIFE - immediately invoked function expression
(function(window, $, Backbone, _) {

  if (!window.App) {
    window.App = {};
  }

  if (!window.App.Views) {
    window.App.Views = {};
  }

  window.App.Views.PageHeader = Backbone.View.extend({
    tagName: 'header',
    id:'page-header',
    render: function() {
      this.$el.append('<h1>Car Tool</h1>');
      return this.$el;
    }
  });

})(window, $, Backbone, _);