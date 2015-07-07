// DO NOT MODIFY

export default class Wallet {
    /**
     * @typedef {{ diameter: number, weight: number, thickness: number }} coin
     * @param {Object.<string, coin>} coinStandards
     * @param {number} variance
     * @param {Fluctuator} fluctuator
     * @param {Wizard} wizard
     */
    constructor(coinStandards, variance, fluctuator, wizard) {
        this.coinStandards = coinStandards
        this.variance = variance
        this.fluctuator = fluctuator
        this.wizard = wizard
    }

    /**
     * @param {string} coinName
     * @returns {{ diameter: number, weight: number, thickness: number }}
     */
    getCoin(coinName) {
        const coin = this.coinStandards[coinName]

        const realCoin = {
            diameter: this.fluctuator.fluctuate(coin.diameter, this.variance),
            weight: this.fluctuator.fluctuate(coin.weight, this.variance),
            thickness: this.fluctuator.fluctuate(coin.thickness, this.variance)
        }

        this.wizard.cast(this, `Took coin: ${coinName} { d: ${realCoin.diameter.toFixed(3)}, w: ${realCoin.weight.toFixed(3)}, t: ${realCoin.thickness.toFixed(3)} }`)

        return realCoin
    }
}