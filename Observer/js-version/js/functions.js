// remap jQuery to $
(function($){


/* trigger when page is ready */
$(document).ready(function (){
  var observerSpace = $('#observer-space');
  var observers = [];
  var subject = new Subject();

  //$('#observer-space').click( subject.registerObserver('observer'+observers.length) );
  observerSpace.on('click', function(e){
    new Observer('observer'+observers.length, subject, e.pageX, e.pageY);
  });

  function Subject(){
    this.size = $('#controls--slider-size').val();
    this.red = $('#controls--slider-red').val();
    this.green = $('#controls--slider-green').val();
    this.blue = $('#controls--slider-blue').val();

    this.registerObserver = function (observer){
      console.log("register " + observer);
      observers.push(observer);
    }

    this.detachObserver = function (name){

    }

    this.notify = function (){

    }
  }

  function Observer(name, subject, x, y){
    this.size = subject.size;
    this.red = subject.red;
    this.green = subject.green;
    this.blue = subject.blue;


    observerSpace.append('<div id="'+name+'" class="observer" style="top:'+y+'px; left:'+x+'px; width:'+subject.size+'px; height:'+subject.size+'px;"></div>');

    subject.registerObserver(name);


    this.update = function(){

      console.log('update');

    }
  }

});

})(window.jQuery);
