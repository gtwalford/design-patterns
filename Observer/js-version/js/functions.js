// remap jQuery to $
(function($){


/* trigger when page is ready */
$(document).ready(function (){

  var observers;
  var subject = new Subject();

  //$('body').on('click', subject.addObserver('observer'+observers.length) );

  function Subject(){
    var size = $('#controls--slider-size').val();
    var red = $('#controls--slider-red').val();
    var green = $('#controls--slider-green').val();
    var blue = $('#controls--slider-blue').val();

    console.log( size, red, green, blue );
    this.registerObserver = function (name){

    }

    this.detachObserver = function (name){

    }

    this.notify = function (){

    }
  }

  function observer(){

    this.update = function(){

    }
  }
});

})(window.jQuery);
