// Write your code here!

window.newHeader = null; // declare newHeader as a global variable

document.addEventListener('DOMContentLoaded', () => {
  // Remove the main element with id 'main'
  const main = document.querySelector('main#main');
  main.remove();

  // Create a new <h1> element and assign it to the newHeader variable
  window.newHeader = document.createElement('h1');
  window.newHeader.id = 'victory';
  window.newHeader.textContent = 'John Doe is the champion'; // Replace with your actual name

  // Add the newHeader element to the DOM
  document.body.appendChild(window.newHeader);
});