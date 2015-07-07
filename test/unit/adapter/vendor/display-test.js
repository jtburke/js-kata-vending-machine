import Display from '../../../../src/adapter/vendor/display.js'

describe('Display', () => {
    describe('setText', () => {
        it('should make the wizard cast "hello"', () => {
            let wizard = { cast: () => {} }
            sinon.stub(wizard)
            let display = new Display(wizard)

            display.setText('hello')

            wizard.cast.should.have.been.calledWith(display, '"hello"')
        })
    })
})