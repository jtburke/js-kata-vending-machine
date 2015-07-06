import chai from '../../node_modules/chai/chai.js'
import sinon from '../../node_modules/sinon/lib/sinon.js'
import sinonChai from '../../node_modules/sinon-chai/lib/sinon-chai.js'

global.chai = chai
global.sinon = sinon
global.sinonChai = sinonChai

chai.Should()
chai.use(sinonChai)