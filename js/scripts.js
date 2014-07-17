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

$(document).ready(function(){
  var missingCoin = -1;
  $('select[name=missingCoinSelector]').change(function () {
    if ($(this).val() === 'Quarters') {
      missingCoin = 0;
    } else if ($(this).val() === 'Dimes') {
      missingCoin = 1;
    } else if ($(this).val() === 'Nickels') {
      missingCoin = 2;
    } else missingCoin = -1;
  })

  $('form#coinCounter').submit(function(event){
    var change =$('#userChange').val();
    var moneyBack =changeMaker(change,missingCoin); //,missingCoin
    $('.moneyBack').text(moneyBack);
    $('#result').show(400);
    event.preventDefault();
  });

  $('select[name=coinMissing]').change(function () {
    if ($(this).val() === 'Yes') {
      $('#missingCoinSelector').show(400);
    } else {
      $('#missingCoinSelector').hide(400);
      missingCoin=-1;
    }
  });
  return missingCoin;
  event.preventDefault();
});


$(document).ready(function(){
  var missingCoin = -1;
  $('select[name=missingCoinSelector]').change(function () {
    if ($(this).val() === 'Quarters') {
      missingCoin = 0;
    } else if ($(this).val() === 'Dimes') {
      missingCoin = 1;
    } else if ($(this).val() === 'Nickels') {
      missingCoin = 2;
    } else missingCoin = -1;
  })

  $('form#coinCounter').submit(function(event){
    var change =$('#userChange').val();
    var moneyBack =changeMaker(change,missingCoin); //,missingCoin
    $('.moneyBack').text(moneyBack);
    $('#result').show(400);
    event.preventDefault();
  });

  $('select[name=coinMissing]').change(function () {
    if ($(this).val() === 'Yes') {
      $('#missingCoinSelector').show(400);
    } else {
      $('#missingCoinSelector').hide(400);
      missingCoin=-1;
    }
  });
  return missingCoin;
  event.preventDefault();
});



