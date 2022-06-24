const { stringRepeaterWithSpace, capitalizeFirst } = require("./stringUtils");

describe("take a string and number to repeat string same number of times seperated by spaces", () => {
  it("handles an empty string", () => {
    expect(stringRepeaterWithSpace("", 0)).toBe("");
    expect(stringRepeaterWithSpace("", 5)).toBe("");
  });

  it("handles a string with 1 or more character", () => {
    expect(stringRepeaterWithSpace("a", 1)).toBe("a");
    expect(stringRepeaterWithSpace("a", 5)).toBe("a a a a a");
    expect(stringRepeaterWithSpace("abc", 3)).toBe("abc abc abc");
  });
});

describe("Capitalize the first letter", () => {
  it("handles an empyty string", () => {
    expect(capitalizeFirst("")).toBe("");
  });

  it("handles 1 or more characters", () => {
    expect(capitalizeFirst("a")).toBe("A");
    expect(capitalizeFirst("asdf")).toBe("Asdf");
  });
});
