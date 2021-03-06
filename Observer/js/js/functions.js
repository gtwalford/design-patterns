// remap jQuery to $
(function($){


/* trigger when page is ready */
$(document).ready(function (){
  var $controls = $('#controls').find('li');
  var $observerSpace = $('#observer-space');
  var observers = [];
  var subject = new Subject();

  $controls.each( function(){
    updateControls( this );
  });

  $observerSpace.on('click', function(e){
    var el = e.target;

    if( el.tagName == 'circle' ){
      //$(el).fadeOut(500, function(){
        //this.remove();
      //});
      subject.detachObserver( el.attributes.data.value );
    }
    else {
      new Observer('observer'+observers.length, e.pageX, e.pageY);
    }
  });

  $controls.on('mousedown, click', function(){
    updateControls( this );
  });


  /*
   * Subject Object
   */
  function Subject(){
    this.size = $('#controls--slider-size').val();
    this.red = $('#controls--slider-red').val();
    this.green = $('#controls--slider-green').val();
    this.blue = $('#controls--slider-blue').val();

    this.registerObserver = function (observer){
      observers.push(observer);
    }

    this.detachObserver = function (index){
      if (index > -1) { 
        observers.splice(index, 1); 
      } 
    }

    this.update = function (){
      this.size = $('#controls--slider-size').val();
      this.red = $('#controls--slider-red').val();
      this.green = $('#controls--slider-green').val();
      this.blue = $('#controls--slider-blue').val();
      
      if( observers.length > 0 ){
        this.notify();
      }
    }

    this.notify = function (){
      observers.forEach( function( observer ){
        observer.update();
      });
    }
  }
 
  /*
   * Observer Object
   */
  function Observer(name, x, y){
    var size = subject.size;
    var red = subject.red;
    var green = subject.green;
    var blue = subject.blue;

    var circle = $(document.createElementNS('http://www.w3.org/2000/svg', 'circle'));
    circle.attr('data', observers.length).attr('cx',x).attr('cy',y).appendTo($observerSpace);
    itemStyle(size, red, green, blue );

    subject.registerObserver( this );

    this.update = function(){
      size = subject.size;
      red = subject.red;
      green = subject.green;
      blue = subject.blue;
      itemStyle(size, red, green, blue );
    }

    function itemStyle( size, r, g, b ){
      circle.attr('r', size)
        .css({
          'fill': 'rgb('+r+','+g+','+b+')',
        });
    }
  }

  /*
   * Update Controls
   */
  function updateControls( element ){
    $(element).find('span').text( $(element).find('input').val() );
    subject.update();
  }

});

})(window.jQuery);
