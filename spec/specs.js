describe("Package", function(){
  describe("packageClass", function(){
    it("method sets a class multiplier base on shipping type selected", function(){
      var testPackage = Object.create(Package);
      testPackage.packageClass('Slip Stream');
      testPackage.classMultiplier.should.equal(3);
    });
  });
  describe("packageWeight", function(){
    it("method to store weight for later multiplication", function(){
      var testPackage = Object.create(Package);
      testPackage.packageWeight(50);
      testPackage.mass.should.equal(50);
    });
  });
    describe("packageDimensions", function(){
    it("method to store weight for later multiplication", function(){
      var testPackage = Object.create(Package);
      testPackage.packageDimensions(5,5,5);
      testPackage.volume.should.equal(125);
    });
  });
    describe("packageDistance", function(){
    it("method to determine distance between two planetary systems", function(){
      var testPackage = Object.create(Package);
      testPackage.packageDistance('alpha', 'transdimensional');
      testPackage.distance.should.equal(10000001000);
    });
  });
    describe("packageCost", function(){
    it("method to determine the cost of shipping", function(){
      var testPackage = Object.create(Package);
      testPackage.packageCost(packageClass.classMultiplier, packageDimensions.volume, packageWeight.mass, packageDistance.distance);
      testPackage.packageCost.should.equal(10000001000);
    });
  });
});

