import Wallet from '../../../../src/adapter/world/wallet.js'

describe('Wallet', () => {
    let coinStandards, stubFluctuator, stubMagician

    beforeEach(() => {
        coinStandards = { '10p': { diameter: 1, weight: 2, thickness: 3 } }
        stubFluctuator = { fluctuate: v => v }
        stubMagician = { cast: () => {} }
    })

    describe('getCoin', () => {
        it('should make the magician cast "Take coin: 10p { d: 1, w: 2, t: 3 }"', () => {
            let cast = sinon.spy(stubMagician, 'cast')
            let wallet = new Wallet(coinStandards, 0, stubFluctuator, stubMagician)

            wallet.getCoin('10p')

            cast.should.have.been.calledWith(wallet, 'Took coin: 10p { d: 1.000, w: 2.000, t: 3.000 }')
        })

        it('should return a fluctuated coin', () => {
            let stub = sinon.stub(stubFluctuator, 'fluctuate')
            let wallet = new Wallet(coinStandards, 0.1, stubFluctuator, stubMagician)

            stub.withArgs(1, 0.1).returns(11)
            stub.withArgs(2, 0.1).returns(12)
            stub.withArgs(3, 0.1).returns(13)

            wallet.getCoin('10p').should.eql({
                diameter: 11,
                weight: 12,
                thickness: 13
            })
        })
    })
})