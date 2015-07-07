// DO NOT MODIFY

export default class Wizard {
    /** @param {function} fire */
    constructor(fire) {
        this.fire = fire
    }

    /**
     * @param {*} source
     * @param {string} message
     */
    cast(source, message) {
        this.fire(`[${source.constructor.name}] ${message}`)
    }
}