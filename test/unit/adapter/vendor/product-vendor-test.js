import ProductVendor from '../../../../src/adapter/vendor/product-vendor.js'

describe('ProductVendor', () => {
    describe('vend', () => {
        it('should make the magician cast "hello"', () => {
            let magician = { cast: () => {} }
            let cast = sinon.spy(magician, 'cast')
            let vendor = new ProductVendor(magician)

            vendor.vend('A', '1')

            cast.should.have.been.calledWith(vendor, 'vend A1')
        })
    })
})