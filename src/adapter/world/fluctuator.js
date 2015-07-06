// DO NOT MODIFY

export default class Fluctuator {
    /**
     * @param {Fluctuator~Randomiser} random
     */
    constructor(random) {
        this.random = random
    }

    /**
     * @param {number} value
     * @param {number} variance
     * @returns {number}
     */
    fluctuate(value, variance) {
        const amount = value * variance
        const min = value - amount
        const max = value + amount

        return this.random() * (max - min) + min
    }

    /**
     * @callback Fluctuator~Randomiser
     * @returns {number}
     */
}