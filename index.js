// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function first() {
  return Promise.resolve(1);
}

function second(value) {
  return Promise.resolve(value + 1);
}

first()
  .then((value) => second(value))
  .then((valueTwo) => console.log(valueTwo));
