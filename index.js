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

// scenario3 : throwing an error outside the promise chain wont go to catchBlock.

/**
 * when the error occured before the promise chain starts. then this error will be considered as run-time error.  it wont go promise catch block.
 * reason: error occured before executing the promise
 *
 */
function sceneThreefnOne() {
  throw new Error('okay im an error');
  return Promise.resolve(1);
}

sceneThreefnOne()
  .then((value) => console.log(value))
  .catch((err) => {
    console.log('inside catch Block');
    console.log('error caught--', err.message);
  });

// scenario4 : throwing an error inside the promise chain
/**
 * Here error is thrown inside the promise chain block.
 * In function "sceneFourfnOne" return promise chain obj.
 * while resolving it with thenable fn, then "sceneFourfnOne" is called.
 * Inside the "sceneFourfnOne" a error is thrown, which is run time error.
 * this error happens inside the promise chain, so this error is bubbled up to nearest catch block
 *
 */

function sceneFourfnOne() {
  return Promise.resolve(1);
}

function sceneFourfnTwo(val) {
  throw new Error('okay im an error');
  return Promise.resolve(val);
}

sceneFourfnOne()
  .then((val) => sceneFourfnTwo(val))
  .then((val) => console.log(val))
  .catch((err) => {
    console.log('inside catch Block');
    console.log('error caught--', err.message);
  });

// scenario five: Promise with try catch
function sceneFivefnone(val) {
  try {
    return sceneFivefnTwo();
  } catch (err) {
    console.log('try/catch', err);
  }
}

function sceneFivefnTwo() {
  return Promise.reject('something went wrong!');
}

sceneFivefnone()
  .then(() => console.log('first'))
  .catch((err) => {
    console.log('main catch', err);
  });

// scenario six: resolve is not return statement


function sceneSixfnOne() {
  sceneSixfnTwo()
  .then((val)=>console.log(val)) // 1 
  .catch((err)=>console.log(err));
}

function sceneSixfnTwo() {
  return new Promise((resolve, reject) => {
    resolve(1);
    reject('failed');
    resolve(2);
    console.log('after resolve/reject');
  });
}

sceneSixfnOne()

/*
output 
'after resolve/reject'
1
**/