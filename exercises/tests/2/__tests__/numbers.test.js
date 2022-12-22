
const { getRandomNumberAsCallback, getRandomNumberAsPromise } = require("./../script");

test('the returned number should be a random number between min and max', () => {
    return getRandomNumberAsPromise(2, 10).then(data => {
        expect(Promise.resolve(data)).resolves.toBeGreaterThan(1)
        expect(Promise.resolve(data)).resolves.toBeLessThan(11)
        console.log(data)
    })
})

// test("Make sure promise works", async () => {
//     const number = await getRandomNumberAsPrimise(1, 10)
//     expect(number).toBeGreaterThanOrEqual(1)
//     expect(number).toBeLessThanOrEqual(10)
// })




test("should return callback that", done => {
    getRandomNumberAsCallback(1, 6, res => {
        try {
            expect(res).toBeLessThan(7)
            expect(res).toBeGreaterThan(0)
            console.log(res)
            done()
        } catch (error) {
            done(error)
        }
    }, 10)
})

// test / "Make sure number as callback works as expected", () => {
//     getRandomNumberAsCallback(1, 10, () => {
//         expect(result).toBeGreaterThanOrEqual(1)
//         expect(result).toBeLessThanOrEqual(10)
//     })
// }
/* Dina tester här under */