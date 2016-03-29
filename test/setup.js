import jsdom from 'jsdom';
import fs from 'fs';
import path from 'path';

// DOM for testing React components
console.log('Creating DOM for Front-End React Testing');
global.document = jsdom.jsdom(fs.readFileSync(path.join(__dirname, '../dist/index.html')), undefined, {
  features: {
    FetchExternalResources: ['script'],
    ProcessExternalResources: ['script'],
    MutationEvents: '2.0',
  },
});

global.window = global.document.defaultView;
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
