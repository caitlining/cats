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

// const tellMeWhatIsInYou = function(theThing) {
//   console.log(theThing, '\n');
// };

// const yellMeWhatIsInYou = function(theThing) {
//   console.log(theThing.toUpperCase(), '\n');
// };

// breedDetailsFromFile('Bombay', tellMeWhatIsInYou);
// breedDetailsFromFile('Balinese', yellMeWhatIsInYou);





module.exports = breedDetailsFromFile;