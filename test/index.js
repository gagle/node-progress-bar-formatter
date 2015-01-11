'use strict';

var code = require('code');
var lab = module.exports.lab = require('lab').script();

var expect = code.expect;
var describe = lab.describe;
var it = lab.it;

var ProgressBarFormatter = require('../lib');

describe('progress-bar-formatter', function () {
  it('applies default options', function (done) {
    var bar = new ProgressBarFormatter();

    expect(bar.format(0)).to.be.equal('························');
    expect(bar.format(1)).to.be.equal('########################');
    expect(bar.format(0.5)).to.be.equal('############············');

    done();
  });

  it('can be configured with custom options', function (done) {
    var bar = new ProgressBarFormatter({
      length: 10,
      complete: '+',
      incomplete: '-'
    });

    expect(bar.format(0.2)).to.be.equal('++--------');

    done();
  });

  it('0.5 percent with length not multiple of 2 is rounded up',
      function (done) {
    var bar = new ProgressBarFormatter({
      length: 7
    });

    expect(bar.format(0.5)).to.be.equal('####···');

    done();
  });

  it('can be configured with a length 1', function (done) {
    var bar = new ProgressBarFormatter({
      length: 1
    });
    expect(bar.format(0.1)).to.be.equal('·');
    expect(bar.format(0.6)).to.be.equal('#');

    done();
  });
});