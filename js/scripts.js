var Package = {
  classMultiplier: 1,
  mass: 1,
  volume: 1,
  distance: 0,
  packageClass: function(classSelect){
    if (classSelect === 'Slip Stream') {
      this.classMultiplier = 3;
    } else if (classSelect === 'Warp Speed'){
      this.classMultiplier = 2;
    } else if (classSelect === 'Impulse Drive') {
      this.classMultiplier = 1;
    } else alert("You've broken the hyperdrive!");
  },
  packageWeight: function(weight){
    this.mass = this.mass * weight;
  },
  packageDimensions: function(length, width, height){
    this.volume = length * width * height;
  },
  packageDistance: function(from,to){
    alpha = -1000,
    beta = 2000,
    delta = 10000,
    gamma = -5000,
    transdimensional = Math.pow(10,10),
    this.distance = Math.abs(to-from);
  },
};

var myPackage = Object.create(Package);
myPackage.packageClass('Slip Stream');
myPackage.packageWeight(10);
myPackage.packageDimensions(5,5,5);
myPackage.packageDistance(100,-100);
console.log(myPackage.packageDistance(100,-110));
