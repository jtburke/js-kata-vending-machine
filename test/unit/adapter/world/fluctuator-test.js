import Fluctuator from '../../../../src/adapter/world/fluctuator.js'

describe('Fluctuator', () => {
    describe('fluctuate', () => {
        it('should return 0.9 when random is 0 and variance is 0.1 for a value of 1', () => {
            new Fluctuator(() => 0).fluctuate(1, 0.1).should.equal(0.9)
        })

        it('should return 1.0 when random is 0.5 and variance is 0.1 for a value of 1', () => {
            new Fluctuator(() => 0.5).fluctuate(1, 0.1).should.equal(1.0)
        })

        it('should return 1.1 when random is 1 and variance is 0.1 for a value of 1', () => {
            new Fluctuator(() => 1).fluctuate(1, 0.1).should.equal(1.1)
        })
    })
})