'use strict';
const  createMyObject = function() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function(){
      return 'hello';
    }
  };
};
let myObject = createMyObject();
console.log(myObject.sayHello());