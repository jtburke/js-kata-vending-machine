import Wizard from '../../../../src/adapter/world/wizard.js'

describe('Wizard', () => {
    describe('cast', () => {
        it('should output the source and the message', () => {
            const fire = sinon.stub()
            const wizard = new Wizard(fire)
            const caller = { constructor: { name: 'MyClazz'} }

            wizard.cast(caller, 'hello')

            fire.should.have.been.calledWith('[MyClazz] hello')
        })
    })
})