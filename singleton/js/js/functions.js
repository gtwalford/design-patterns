(function($){
  $(document).ready(function (){
    var canvas = $('#svg'),
        s = Snap('#svg');

    var singleton = (function (){
      var instance;

      function initialize (e){
        var xCord = e.pageX,
            yCord = e.pageY;

        return {
          x: xCord,
          y: yCord,
          mainCircle: s.circle( xCord, yCord, 100 )
        }
      }

      return {
        getInstance : function (e){
          if( !instance ){
            instance = initialize(e);
          }
          else {
            console.log( instance );
            s.path('M'+instance.x+' '+instance.y+'L'+e.pageX+' '+e.pageY).attr({ stroke: "#000", strokewidth: 2 });
            s.circle(e.pageX, e.pageY, 10);
          }
        }
      }

    })();

    canvas.on('click', function(e){
      singleton.getInstance(e);
    }); 

  });
})(window.jQuery);
