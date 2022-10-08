describe("pow", function() {

  describe("x в степени 3", function(){

  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} ** 3 = ${expected}`, function() {
      assert.equal(pow(x, 3), expected);
      assert.isNaN(pow(2, -1), expected);
    });
  };

  for (let x = -1; x <= 10; x++) {
    makeTest(x);
  }
});
});


describe("funts", function(){

  describe("kg в funts", function(){

  function weight(b) {
    let formula = b * 2.205;
    it(`${b} = ${formula}`, function(){
      assert(b);
    });
  };

  for(let b = 1; b <= 10; b++){
    weight(b);
  };
});
});


// describe("fib", function(){
  
//   describe("numbers", function(){

//   function fibNum(f){
//     const fib = f => {
//     let prev = 0, next = 1;
//     for(let i = 0; i < f; i++){
//       let temp = next;
//       next = prev + next;
//       prev = temp;
//     };
//     return prev;
// };
//   it(`${f} = ${prev}`, function(){
//     assert(f)
//   });
//   };
//   for(let f = 1; f <= 10; f++){
//     fibNum(f) ;
//   };
//   });
// })