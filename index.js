// Write your code here!

// Remove the <main> element with id 'main'
document.querySelector('main#main').remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set id attribute of the new <h1> element to 'victory'
newHeader.id = 'victory';

// Set innerHTML of the new <h1> element
newHeader.innerHTML = "YOUR-NAME is the champion"; // Replace YOUR-NAME with the desired name

// Append the new <h1> element to the document body or any other desired location
document.body.appendChild(newHeader);

// Export newHeader to make it accessible in tests
export { newHeader };
