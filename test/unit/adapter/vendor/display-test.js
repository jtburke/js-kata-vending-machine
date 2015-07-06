import Display from '../../../../src/adapter/vendor/display.js'

describe('Display', () => {
    describe('setText', () => {
        it('should make the magician cast "hello"', () => {
            let magician = { cast: () => {} }
            sinon.stub(magician)
            let display = new Display(magician)

            display.setText('hello')

            magician.cast.should.have.been.calledWith(display, '"hello"')
        })
    })
})