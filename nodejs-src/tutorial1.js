/** module.exports = someclass ; */
/** const tutorial1 = require('./tutorial') */
const sum = (n1, n2) => n1 + n2;
const PI = 3.14;
class SomeMathObj{
  constructor(){
    console.log('object created');
  }
}

/** require all three export
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObj= SomeMathObj;
*/
/** instead of individual exports */
module.exports = {sum : sum, PI : PI, SomeMathObj : SomeMathObj}
