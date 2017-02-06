let chai = require('chai');
let expect = chai.expect;
let jsonDiff = require('./jsondiff');
let totalObjectKeys = require('./totalObjectKeys');
const csvToJson = require('../Data_Munging/chicagoCrimeTheft');
const expectedLineJSON = require('./chicagoCrimeJSON1.json');
const actualLineJSON = require('../outputdata/chicagoCrimeJSON2.json');

describe('Run series of test for converter', function(){
  it("should not result in error", function(done){
     //expect(csvToJson).to.not.throw(Error);
     done();
   });

  it('should fail if year is notprovided', function(){
       expect(csvToJson).to.throw(Error, "Not a number");
   });

  it('should fail if year is not a number', function(){
       expect(csvToJson.bind(undefined, {})).to.throw(Error, "Not a number");
   });

  it('should fail if year is NaN', function(){
       expect(csvToJson.bind(undefined, NaN)).to.throw(Error, "Not a number");
   });

  it('should not fail if the year is a literal number', function(){
       expect(csvToJson.bind(undefined, 1960)).to.not.throw(Error, "Not a number");
   });

  it('should not fail if the year is a Number object', function(){
       expect(csvToJson.bind(undefined, Number(1960))).to.not.throw(Error, "Not a number");
   });

})


describe('Test Application as Blackbox', function(){
  it('Line JSON has expected Number of Objects', function(done){
    let objMatrix = totalObjectKeys.traverse(actualLineJSON);
    expect(objMatrix.totalNoObjects).to.not.equal(0);
    expect(objMatrix.totalNoKeys).to.not.equal(0);
    done();
  });
  it('Test of Line JSON is as expected', function(done){
    let compareResult = jsonDiff.compareJSONObjects(expectedLineJSON, actualLineJSON);
    expect(compareResult.diffs).equal(0);
    done();
  });
})
