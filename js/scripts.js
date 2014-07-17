var ShippingCalc = {
  classMultiplier: 1,
  mass: 1,
  volume: 1,
  distance:0,
  shippingClass: function(classSelect){
    if (classSelect === 'Slip Stream') {
      this.classMultiplier = 3;
    } else if (classSelect === 'Warp Speed'){
      this.classMultiplier = 2;
    } else if (classSelect === 'Impulse Drive') {
      this.classMultiplier = 1;
    } else alert("You've broken the hyperdrive!");
  },
  shippingWeight: function(weight){
    this.mass = this.mass * weight;
  },
  shippingDimensions: function(length, width, height){
    this.volume = length * width * height;
  },
  shippingDistance: function(from,to){
    this.distance = Math.abs(to-from);
  },
  cost: this.classMultiplier*this.mass*this.volume*this.distance,
};

// var Quadrants = {
//   name: '',
//   distanceFromBase: 1,

// }

