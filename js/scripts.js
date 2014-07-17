var ShippingCalc = {
  cost: 1,
  classMultiplier: 1,
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
    this.cost = this.cost * weight;
  }
};
