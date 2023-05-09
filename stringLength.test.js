const { stringLength, reverseString } = require("./stringLength");

// test 1 string length 

describe("stringLength", () => {
  test("returns the length of a string", () => {
    expect(stringLength("Hello")).toBe(5);
  });

  test("min 1", () => {
    expect(stringLength("")).toBeLessThan(1);
  });
  test("max 10", () => {
    expect(stringLength("greater than 10")).toBeGreaterThan(10);
  });

});

// test 2 reverse string 

describe("reverse string" , ()=>{
  test('reverse string 1' , ()=>{
    expect(reverseString('hello')).toBe('olleh')
  })

  test('reverse string 2' , ()=>{
    expect(reverseString('microverse')).toBe('esrevorcim')
  })
})
