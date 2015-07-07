import ProductVendor from '../../../../src/adapter/vendor/product-vendor.js'

describe('ProductVendor', () => {
    describe('vend', () => {
        it('should make the wizard cast "hello"', () => {
            let wizard = { cast: () => {} }
            let cast = sinon.spy(wizard, 'cast')
            let vendor = new ProductVendor(wizard)

            vendor.vend('A', '1')

            cast.should.have.been.calledWith(vendor, 'vend A1')
        })
    })
})