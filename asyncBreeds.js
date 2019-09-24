const fs = require('fs');

const breedDetailsFromFile = function(breed, callbackFunc) {
  console.log('breedDetailsFromFile: Calling readfile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log('Callback: I have the data!')
    if (!error) {
    callbackFunc(data);
  } else if (error) {
    callbackFunc(undefined);
    }
  });
}

module.exports = breedDetailsFromFile;