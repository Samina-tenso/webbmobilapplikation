const { multiply } = require("../script");
test("2 * 3  becomes 6", () => {
    expect(multiply(2, 3)).toBe(6);
})