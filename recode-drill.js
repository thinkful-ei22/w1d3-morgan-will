'use strict';
const keyCode = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const decode = function(word){
  if (word[0] in keyCode){
    return word[keyCode[word[0]]];
  }
  else {
    return ' ';
  }
};
const decodeWords = function(words){
  let wordArray = words.split(' ');
  let decodedWords = wordArray.map(word =>  decode(word));
  console.log( decodedWords.join(''));
};
decodeWords('craft block argon meter bells brown croon droop');