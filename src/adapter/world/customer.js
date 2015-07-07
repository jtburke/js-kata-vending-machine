// DO NOT MODIFY

export default class Customer {
    constructor(wallet, wizard) {
        this.wallet = wallet
        this.wizard = wizard
    }

    /**
     * @param {string} coinName
     * @param {MagicVendingMachine} vendingMachine
     */
    insert(coinName, vendingMachine) {
        this.wizard.cast(this, `Insert ${coinName} coin`)
        const coin = this.wallet.getCoin(coinName);
        vendingMachine.insert(coin)
    }

    /**
     * @param {string} row
     * @param {string} col
     * @param {MagicVendingMachine} vendingMachine
     */
    requestProduct(row, col, vendingMachine) {
        this.wizard.cast(this, `Request ${row}${col}`)
        vendingMachine.requestProduct(row, col)
    }

    requestChange(vendingMachine) {
        this.wizard.cast(this, 'Change requested')
        vendingMachine.requestChange()
    }
}