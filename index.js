// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// promise syntax:

// scenario 1 : both function return promise
function sceneOnefnOne() {
  return Promise.resolve(1);
}

function sceneOnefnTwo(value) {
  return Promise.resolve(value + 1);
}

sceneOnefnOne()
  .then((value) => sceneOnefnTwo(value))
  .then((valueTwo) => console.log('sceanrio 1: ', valueTwo));

//scenario 2:  first fn return promise, second fn doesn't return promise.

function sceneTwofnOne() {
  return Promise.resolve(1);
}

function sceneTwofnTwo(value) {
  return value + 1;
}

sceneTwofnOne()
  // then(cbfn)
  // then(wrappedPromise(cbfn))

  .then((val) => sceneTwofnTwo(val))
  .then((val) => console.log('scenario 2:', val));
