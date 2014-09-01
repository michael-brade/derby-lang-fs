var lib = require('..');
var path = require('path');
var should = require('chai').should();

describe('derby-lang-fs', function () {
  describe('middleware', function () {
    it('should be a function', function () {
      lib.should.be.a('function');
    });
  });

  describe('load', function () {
    it('should be a function', function () {
      lib.should.have.property('load');
      lib.load.should.be.a('function');
    });

    it('should return a dictionary', function (done) {
      var opts = {dir: path.join(__dirname, 'fixture')};
      lib.load(opts, function (err, dict) {
        (err === null).should.be.true;
        dict.should.have.property('strings');
        dict.strings.should.be.an('object');
        dict.strings.should.have.property('en');
        dict.strings.should.have.property('es');
        dict.strings.en.should.eql({foo: 'bar'});
        dict.strings.es.should.eql({foo: 'qux'});
        dict.should.have.property('messageformat');
        dict.messageformat.should.be.an('object');
        dict.messageformat.should.have.property('locale');
        dict.messageformat.locale.should.be.an('object');
        dict.messageformat.locale.should.have.property('en');
        dict.messageformat.locale.en.should.be.a('string');
        done();
      });
    });
  });
});
