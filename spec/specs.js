describe("ShippingCalc", function(){
  describe("shippingClass", function(){
    it("method sets a class multiplier base on shipping type selected", function(){
      var testShippingCalc = Object.create(ShippingCalc);
      testShippingCalc.shippingClass('Slip Stream');
      testShippingCalc.classMultiplier.should.equal(3);
    });
  });
  describe("shippingWeight", function(){
    it("method to store weight for later multiplication", function(){
      var testShippingCalc = Object.create(ShippingCalc);
      testShippingCalc.shippingWeight(50);
      testShippingCalc.mass.should.equal(50);
    });
  });
    describe("shippingDimensions", function(){
    it("method to store weight for later multiplication", function(){
      var testShippingCalc = Object.create(ShippingCalc);
      testShippingCalc.shippingDimensions(5,5,5);
      testShippingCalc.volume.should.equal(125);
    });
  });
    describe("shippingDistance", function(){
    it("method to determine distance between two planetary systems", function(){
      var testShippingCalc = Object.create(ShippingCalc);
      testShippingCalc.shippingDistance(-5000,2600);
      testShippingCalc.distance.should.equal(7600);
    });
  });
});

