// DO NOT MODIFY

export default class ProductVendor {
    /**
     * @param {Wizard} wizard
     */
    constructor(wizard) {
        this.wizard = wizard
    }

    /**
     * @param {string} row
     * @param {string} col
     */
    vend(row, col) {
        this.wizard.cast(this, `vend ${row}${col}`)
    }
}