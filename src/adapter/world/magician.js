// DO NOT MODIFY

export default class Magician {
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