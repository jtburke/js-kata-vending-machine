import Magician from '../../../../src/adapter/world/magician.js'

describe('Magician', () => {
    describe('cast', () => {
        it('should output the source and the message', () => {
            const fire = sinon.stub()
            const magician = new Magician(fire)
            const caller = { constructor: { name: 'MyClazz'} }

            magician.cast(caller, 'hello')

            fire.should.have.been.calledWith('[MyClazz] hello')
        })
    })
})