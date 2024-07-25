const jsdom = require('jsdom');

const { window } = new jsdom.JSDOM('<!DOCTYPE html><html><body><main id="main"></main></body></html>', {
  runScripts: 'dangerously',
  resources: 'usable',
});
global.window = window;
global.document = window.document;

let newHeader;

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main#main');
  if (main) {
    main.remove();
  }

  newHeader = document.createElement('h1');
  newHeader.textContent = 'YOUR-NAME is the champion';
  newHeader.id = 'victory';
  document.body.appendChild(newHeader);
});

module.exports = { newHeader };