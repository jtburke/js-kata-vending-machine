// DO NOT MODIFY

export default class Customer {
    constructor(wallet, magician) {
        this.wallet = wallet
        this.magician = magician
    }

    /**
     * @param {string} coinName
     * @param {MagicVendingMachine} vendingMachine
     */
    insert(coinName, vendingMachine) {
        this.magician.cast(this, `Insert ${coinName} coin`)
        const coin = this.wallet.getCoin(coinName);
        vendingMachine.insert(coin)
    }

    /**
     * @param {string} row
     * @param {string} col
     * @param {MagicVendingMachine} vendingMachine
     */
    requestProduct(row, col, vendingMachine) {
        this.magician.cast(this, `Request ${row}${col}`)
        vendingMachine.requestProduct(row, col)
    }

    requestChange(vendingMachine) {
        this.magician.cast(this, 'Change requested')
        vendingMachine.requestChange()
    }
}