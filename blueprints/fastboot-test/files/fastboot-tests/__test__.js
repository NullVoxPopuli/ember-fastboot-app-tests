'use strict';

const expect = require('chai').expect;

describe('<%= camelizedModuleName %>', function() {

  it('renders', function() {
    return this.visit('/<%= url %>')
      .then(function(res) {
        let $ = res.jQuery;
        let response = res.response;

        // add your real tests here
        expect(response.statusCode).to.equal(200);
        expect($('body').length).to.equal(1);
      });
  });

});