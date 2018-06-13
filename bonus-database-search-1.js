'use strict';

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

const findOne = function(arr, query) {
    let keys = Object.keys(query); //makes array of keys of query
    let hero = 'null'; //default return is undefined
    keys.forEach(function(key){   //loops through query keys
        hero = arr.find(function(val){  //finds 
            return val[key] === query[key];
        });
    });
    return hero;  //returns the found hero or 'undefined'
};

console.log(findOne(HEROES, { name: 'Wonder Woman' }));
