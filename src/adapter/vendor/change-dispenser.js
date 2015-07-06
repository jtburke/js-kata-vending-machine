// DO NOT MODIFY

export default class ChangeDispenser {
    /** @param {Magician} magician */
    constructor(magician) {
        this.magician = magician
    }

    /** @param {{ diameter: number, weight: number, thickness: number}} rejected */
    dispenseRejected(rejected) {
        this.magician.cast(this, `Returned rejected object { d: ${rejected.diameter.toFixed(3)}, w: ${rejected.weight.toFixed(3)}, t: ${rejected.thickness.toFixed(3)} }`)
    }

    /** @param {number} value */
    dispense(value) {
        this.magician.cast(this, `Dispense ${value}`)
    }
}