'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : false,

    frameworks: ['mocha', 'sinon-chai'],

    browsers : ['Chrome'],

    plugins : [
        'karma-chrome-launcher',
        'karma-mocha',
        'karma-sinon-chai'
    ]
  });
};
