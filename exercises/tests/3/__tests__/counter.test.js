const { afterEach } = require("node:test");
const Counter = require("./../script");

describe("Counter", () => {
  let counter = new Counter();
  afterEach(() => {
    counter.reset();
    //återställ countern
  })
  test("Testa att increase fungerar", () => {
    counter.increase();
    const value = counter.getCount();
    expect(value).toBe(1);
  })

  test("Testa att countern återställs fungerar", () => {
    const value = counter.getCount();
    expect(value).toBe();
  })/* Skriv dina tester här nedan */

  test("Testa att decrease fungerar", () => {
    const value = counter.getCount();
  })
})