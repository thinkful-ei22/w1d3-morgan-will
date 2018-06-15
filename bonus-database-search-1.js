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

//Returns FIRST ellement in array to match all query key-values
const findOne = function(heroArr, query) {
  const queryKeys = Object.keys(query);
  let possibleHeros = [];
  heroArr.forEach( function(hero) {
    let flag = true;
    for(let i = 0; i < queryKeys.length; i++) {
      if (query[queryKeys[i]] !== hero[queryKeys[i]]) {
        flag = false;
      }
    }
    if(flag) {
      possibleHeros.push(hero);
    }
  });
  return possibleHeros.length === 0 ? null : possibleHeros[0];
};

//Returns ALL elements in array that match all query key-values
const findAll = function(heroArr, query) {
  const queryKeys = Object.keys(query);
  let possibleHeros = [];
  heroArr.forEach( function(hero) {
    let flag = true;
    for(let i = 0; i < queryKeys.length; i++) {
      if (query[queryKeys[i]] !== hero[queryKeys[i]]) {
        flag = false;
      }
    }
    if(flag) {
      possibleHeros.push(hero);
    }
  });
  return possibleHeros.length === 0 ? null : possibleHeros;
};

let test_findOne = findOne(HEROES, { id: 1, name: 'Captain Mexico', squad: 'Avengers'});
console.log(test_findOne);

let test_findAll = findAll(HEROES, { squad: 'Avengers'});
console.log(test_findAll);

