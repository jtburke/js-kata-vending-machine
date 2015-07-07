// DO NOT MODIFY

export default class Display {
    constructor(wizard) {
        this.message = ''
        this.wizard = wizard
    }

    /** @param {string} message */
    setText(message) {
        this.message = message;
        this.wizard.cast(this, `"${message}"`)
    }

    getText() {
        return this.message
    }
}