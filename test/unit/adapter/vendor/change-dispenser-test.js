import ChangeDispenser from '../../../../src/adapter/vendor/change-dispenser.js'

describe('Change Dispenser', () => {
    let stubWizard

    beforeEach(() => {
        stubWizard = { cast: () => {} }
    })

    describe('dispenseRejected', () => {
        it('should make the wizard cast "hello"', () => {
            let cast = sinon.spy(stubWizard, 'cast')
            let change = new ChangeDispenser(stubWizard)

            change.dispenseRejected({
                diameter: 1,
                weight: 2,
                thickness: 3
            })

            cast.should.have.been.calledWith(change, 'Returned rejected object { d: 1.000, w: 2.000, t: 3.000 }')
        })
    })

    describe('dispense', () => {
        it('should make the wizard cast "Dispense 120"', () => {
            let cast = sinon.spy(stubWizard, 'cast')
            let change = new ChangeDispenser(stubWizard)

            change.dispense(120)

            cast.should.have.been.calledWith(change, 'Dispense 120')
        })
    })
})