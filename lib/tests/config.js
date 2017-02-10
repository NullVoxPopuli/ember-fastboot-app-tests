'use strict';

module.exports = {

  options: {
    reporter: 'spec',
    timeout: 600000
  },
  
  setOption(key, value) {
    if (typeof this.options[key] !== 'undefined') {
      this.options[key] = value;
    }
  },

  setOptions(options) {
    for (let key in options) {
      this.setOption(key, options[key]);
    }
  },

  getOption(key) {
    return this.options[key];
  },

  getOptions() {
    return this.options;
  }

};