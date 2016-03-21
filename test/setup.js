const jsdom = require('jsdom');

console.log('Creating DOM for React Testing');

// DOM for testing React components
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = { userAgent: 'node.js' };

// Switch from development to turn off hot reload
process.env.NODE_ENV = 'test';

// Simulate local storage for jsdom
const storage = {};
global.window.localStorage = {
  setItem(item, value) {
    storage[item] = value;
  },

  getItem(item) {
    return storage[item];
  },
};
