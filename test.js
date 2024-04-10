
const { fromEuroToDollar, fromDollarToYen , fromYentoPound} = require('./app.js');


test("One euro should be 1.07 dollars", function() {

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07; 
   
    expect (dollars).toBe(expected); 

})
test("One euro should be 1.07 dollars", function() {
    
    const euro = fromDollarToYen(3.5);

    const expected = 1.07* 156.5;  
   
    expect(fromDollarToYen).toBe(expected);

})
test("One euro should be 1.07 dollars", function() {
    
    const Yen = fromYentoPound(3.5);

    const expected = 156.5 * 0.87; 
   
    expect(fromYentoPound).toBe(expected);

})