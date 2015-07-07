// MODIFY ME :)

export default class MagicVendingMachine {
    /** @typedef {{ name: string, qty: number, price: number }} stock */
    /** @typedef {{ diameter: number, weight: number, thickness: number, value: number }} coin */

    /**
     * @param {{}} options
     * @param {Wizard} options.wizard
     * @param {ChangeDispenser} options.change
     * @param {Display} options.display
     * @param {ProductVendor} options.vendor
     * @param {Object.<string, Object.<string, stock>>} options.stock
     * @param {coin[]} options.accepts
     */
    constructor(options) {
        this.display = options.display
        this.change  = options.change
        this.vendor  = options.vendor
        this.wizard  = options.wizard
    }

    /**
     * DO NOT CHANGE SIGNATURE
     * @param {{ diameter: number, weight: number, thickness: number}} inserted
     */
    insert(inserted) {
        this.wizard.cast(this, `insert { d: ${inserted.diameter.toFixed(3)}, w: ${inserted.weight.toFixed(3)}, t: ${inserted.thickness.toFixed(3)}}`)
        this.change.dispenseRejected(inserted)
    }

    /**
     * DO NOT CHANGE SIGNATURE
     * @param {string} row
     * @param {string} col
     */
    requestProduct(row, col) {
        this.wizard.cast(this, `product requested ${row}${col}`)
    }

    /**
     * DO NOT CHANGE SIGNATURE
     */
    requestChange() {
        this.wizard.cast(this, 'change requested')
        this.change.dispense(120)
    }
}