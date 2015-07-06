// DO NOT MODIFY

export default class Display {
    constructor(magician) {
        this.message = ''
        this.magician = magician
    }

    /** @param {string} message */
    setText(message) {
        this.message = message;
        this.magician.cast(this, `"${message}"`)
    }

    getText() {
        return this.message
    }
}