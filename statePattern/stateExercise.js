// State Pattern Excercise
//
// Based on excercise from picciano
// http://patterns.parseapp.com/#19
//

/**
 * Assertion function to check validity
 *
 */
function assert(condition, message) {
  if (!condition) {
    message = message || "Assertion failed";
      if (typeof Error !== "undefined") {
      throw new Error(message);
    }
    throw message;
  }
  else {
    console.log( message );
  }
}

/*
 * Gear Object
 *
 */
var Gear = {
  First: 5,
  Reverse: -5,
  Second: 8,
  Neutral: 0
};

/**
 * Tracktor Object and functions
 *
 */
var Tractor = function(){
  this.location = 0;
  this.speed = 0;
};

Tractor.prototype.setGear = function( direction ){
  this.speed = direction;
  return this;
};

Tractor.prototype.accelerate = function(){
  this.location += this.speed;
  return this;
};

// Begin State test
var tractor = new Tractor();
assert(tractor.location === 0, "Tractor should be at 0 feet.");

tractor.setGear(Gear.First).accelerate();
assert(tractor.location === 5, "Tractor should be at 5 feet.");

tractor.setGear(Gear.Reverse).accelerate().accelerate();
assert(tractor.location == -5, "Tractor should be at -5 feet.");

tractor.setGear(Gear.Second).accelerate().accelerate();
assert(tractor.location == 11, "Tractor should be at 11 feet.");

tractor.setGear(Gear.Neutral).accelerate();
assert(tractor.location == 11, "Tractor should be at 11 feet.");
