(function(window, $, Backbone, _) {

  var pageHeader = new App.Views.PageHeader();
  $('main').append(pageHeader.render());

})(window, $, Backbone, _);