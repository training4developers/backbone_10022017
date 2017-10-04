(function(window, $, Backbone, _) {

  Instructions: Take the Car table code from yesterday and wrap it in
  a View Class. Instantiate the view class, pass in the cars, then 
  render and display the cars.

  var pageHeader = new App.Views.PageHeader();
  $('main').append(pageHeader.render());

})(window, $, Backbone, _);