const userName = 'John'; // Replace with the actual user's name

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