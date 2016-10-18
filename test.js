const POWER_ON_EXPECTED = new Float32Array([
  3.502,
  1.75,
  0.502,
  0.4,
  0.502,
  1.244,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  1.244,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  1.244,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  1.244,
  0.502,
  0.4,
  0.502,
  1.244,
  0.502,
  1.244,
  0.502,
  1.244,
  0.502,
  1.244,
  0.502,
  0.4,
  0.502,
  0.4,
  0.502,
  1.244,
  0.502,
  0.4,
  0.502,
  1.244,
  0.502,
  1.244,
  0.502,
  1.244,
  0.502,
  1.244,
  0.502,
  0.4,
  0.502,
  1.244,
  0.502,
  0
]);

var expect = require('chai').expect;

var panasonic = require('./panasonic');
var actual = panasonic.generate(0x4004, 0x100BCBD);

expect(actual).to.deep.equal(POWER_ON_EXPECTED);
