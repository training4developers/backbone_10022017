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

    template: function(data) {
      
      var templateStr = $('#car-table-template').html();

      if (!this._compiledTemplate) {
        this._compiledTemplate = _.template(templateStr);
      }

      return this._compiledTemplate(data);
    },

    render: function() {

      var html = this.template({
        headerText: 'Car Tool',
        slogan: 'The best car lot in town.',
      });

      this.$el.append(html);
      return this.$el;
    }
  });

})(window, $, Backbone, _);