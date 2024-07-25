const jsdom = require('jsdom');

const userName = 'John'; // Replace with the actual user's name

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
  newHeader.textContent = `${userName} is the champion`;
  newHeader.id = 'victory';
  document.body.appendChild(newHeader);
});

module.exports = { newHeader };