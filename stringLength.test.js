const { stringLength } = require("./stringLength");

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
