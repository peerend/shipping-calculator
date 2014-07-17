var Package = {
  classMultiplier: 1,
  mass: 1,
  volume: 1,
  distance: 0,
  cost: 0,
  packageClass: function(classSelect){
    if (classSelect === 'Slip Stream') {
      this.classMultiplier = 3;
    } else if (classSelect === 'Warp Speed'){
      this.classMultiplier = 2;
    } else if (classSelect === 'Impulse Drive') {
      this.classMultiplier = 1;
    }
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
  packageCost: function(){
    this.cost = (this.mass + this.volume) * this.distance * this.classMultiplier;
  }
};

$(document).ready(function(){
  $('form#shippingCalc').submit(function(event){

  var myPackage = Object.create(Package);
  var from = $('#userFrom').val();
  console.log(from);
  var to = $('#userTo').val();
  console.log(to);
  var weight = $('#weight').val();
  console.log(weight);
  var length = $('#length').val();
  console.log(length);
  var width = $('#width').val();
  var height = $('#height').val();
  var classSelect = $('#packageClass').val();

  console.log(myPackage.cost);
  myPackage.cost();
  console.log(myPackage.cost);


    $('#totalCost').text(cost);
    $('#result').show(400);
    event.preventDefault();


  return cost;
  event.preventDefault();
  });
});


