class Counter {
    constructor(count) {
        //spara propertyvalue
        this.count = 0

    }
    increment() {
        //returnerar inte value utan updaterar bara value?
        this.count += 1
    }
    reset() {
        this.count = 0
    }
    getCurrentValue() {
        return this.count
    }
}
const firstCounter = new Counter()
// men . så ser vi metoderna och values
firstCounter.increment()
firstCounter.increment()
const x = firstCounter.getCurrentValue()
console.log(x)

firstCounter.reset()
const y = firstCounter.getCurrentValue()
console.log(y)