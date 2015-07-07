// DO NOT MODIFY

export default class ChangeDispenser {
    /** @param {Wizard} wizard */
    constructor(wizard) {
        this.wizard = wizard
    }

    /** @param {{ diameter: number, weight: number, thickness: number}} rejected */
    dispenseRejected(rejected) {
        this.wizard.cast(this, `Returned rejected object { d: ${rejected.diameter.toFixed(3)}, w: ${rejected.weight.toFixed(3)}, t: ${rejected.thickness.toFixed(3)} }`)
    }

    /** @param {number} value */
    dispense(value) {
        this.wizard.cast(this, `Dispense ${value}`)
    }
}