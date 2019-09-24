//asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callbackFunc) {
  console.log('breedDetailsFromFile: Calling readfile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log('Callback: I have the data!')
    if (!error) callbackFunc(data);
  });

}

// we try to get the return value
// const bombay = breedDetailsFromFile('Bombay');
// console.log('Return Value: ', bombay)  => will NOT print out details, instead we will see undefined!

breedDetailsFromFile('Bombay', (bombay) => {
  console.log('Return Value: ', bombay)
});