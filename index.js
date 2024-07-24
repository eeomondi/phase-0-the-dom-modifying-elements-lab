// Write your code here!
let newHeader;

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main#main');
  if (main) {
    main.remove();
  }

  newHeader = document.createElement('h1');
  newHeader.textContent = `John is the champion`;
  newHeader.id = 'victory';
  document.body.appendChild(newHeader);
});