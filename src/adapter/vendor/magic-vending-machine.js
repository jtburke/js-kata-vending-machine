// MODIFY ME :)

export default class MagicVendingMachine {
    /**
     * DO NOT CHANGE SIGNATURE
     * @param {{}} options
     * @param {Magician} options.magician
     * @param {ChangeDispenser} options.change
     * @param {Display} options.display
     * @param {ProductVendor} options.vendor
     * @param {} options.stock
     * @param {} options.accepts
     */
    constructor(options) {
        this.display = options.display
        this.change  = options.change
        this.vendor  = options.vendor
        this.magician  = options.magician
    }

    /**
     * DO NOT CHANGE SIGNATURE
     * @param {{ diameter: number, weight: number, thickness: number}} inserted
     */
    insert(inserted) {
        this.magician.cast(this, `insert { d: ${inserted.diameter.toFixed(3)}, w: ${inserted.weight.toFixed(3)}, t: ${inserted.thickness.toFixed(3)}}`)
        this.change.dispenseRejected(inserted)
    }

    /**
     * DO NOT CHANGE SIGNATURE
     * @param {string} row
     * @param {string} col
     */
    requestProduct(row, col) {
        this.magician.cast(this, `product requested ${row}${col}`)
    }

    /**
     * DO NOT CHANGE SIGNATURE
     */
    requestChange() {
        this.magician.cast(this, 'change requested')
        this.change.dispense(120)
    }
}