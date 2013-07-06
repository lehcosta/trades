Module("FrontEnd.Application", function(Application){
  Application.prototype.initialize = function(controller, action) {
    Module.run(
        ["FrontEnd", controller + "Controller", action].join(".") // build the namespace
      , $(document.body) // pass the body as the container
    );
  };
});

$(function(){
  var html = $("html")
    , controller = html.data("controller")
    , action = html.data("action")
  ;

  mediator = new Mediator();
  FrontEnd.Application(controller, action);
});