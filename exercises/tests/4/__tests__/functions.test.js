
const { reverseString, isBetween, chunk } = require("./../script");
describe("Test reverseString", () => {
    test("ReverseString throws an error when not passed a string", () => {
        //tothrow måste vara wrapped i funktion
        expect(() => reverseString(10)).toThrow();
    })


    test("ReverseString returnerar  en tom sträng given en tom sträng", () => {
        expect(reverseString("")).toBe("");
    })

    test("ReverseString reverses the given string", () => {
        expect(reverseString("horse")).toBe("esroh")
    })
})
// Skriv tester för reverseString, isBetween och chunk.
// och försök uppnå 100% test coverage!