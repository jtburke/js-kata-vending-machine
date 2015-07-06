// DO NOT MODIFY

export default class ProductVendor {
    /**
     * @param {Magician} magician
     */
    constructor(magician) {
        this.magician = magician
    }

    /**
     * @param {string} row
     * @param {string} col
     */
    vend(row, col) {
        this.magician.cast(this, `vend ${row}${col}`)
    }
}