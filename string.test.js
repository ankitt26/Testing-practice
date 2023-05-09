const { stringLength, reverseString, calculator } = require("./codeHere");


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

describe("reverse string", () => {
  test("reverse string 1", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("reverse string 2", () => {
    expect(reverseString("microverse")).toBe("esrevorcim");
  });
});

// test 3 calculator

describe("calculator: add", () => {
  test("add 1", () => {
    const calc = new calculator();
    expect(calc.add(2, 3)).toBe(5);
  });

  test("add 2", () => {
    const calc = new calculator();
    expect(calc.add(-1, -4)).toBe(-5);
  });

  test("add 3", () => {
    const calc = new calculator();
    expect(calc.add(0, 4)).toBe(4);
  });
});

describe("calculator: subtract" , ()=>{
  test("subtract 1" , ()=>{
    const calc = new calculator();
    expect(calc.subtract(10,5)).toBe(5);
  })

  test("subtract 2" , ()=>{
    const calc = new calculator();
    expect(calc.subtract(10,15)).toBe(-5);
  })

  test("subtract 3" , ()=>{
    const calc = new calculator();
    expect(calc.subtract(10,0)).toBe(10);
  })
})

describe("calculator: divide" , ()=>{
  test("divide 1" , ()=>{
    const calc = new calculator();
    expect(calc.divide(10,5)).toBe(2);
  })

  test("divide 2" , ()=>{
    const calc = new calculator();
    expect(calc.divide(10,10)).toBe(1);
  })

  test("divide 3" , ()=>{
    const calc = new calculator();
    expect(calc.divide(20,5)).toBe(4);
  })
})

describe("calculator: multiply" , ()=>{
  test("multiply 1" , ()=>{
    const calc = new calculator();
    expect(calc.multiply(10,5)).toBe(50);
  })

  test("multiply 2" , ()=>{
    const calc = new calculator();
    expect(calc.multiply(6,0)).toBe(0);
  })

  test("multiply 3" , ()=>{
    const calc = new calculator();
    expect(calc.multiply(10,1)).toBe(10);
  })

});