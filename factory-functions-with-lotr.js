'use strict';

const createCharacter = function(nickname, race, origin, attack, defense) {
  return {
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function() {
      console.log(`${this.nickname} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(character) {
      let x = this.attack - character.defense;
      if (x < 0) {
        x = 0;
      }
      let y = character.attack - this.defense;
      if (y < 0) {
        y = 0;
      }
      console.log(`Your opponent takes ${x} damage and you receive ${y} damage`);
    }
  };
};

const characters = [
  createCharacter('gandalf', 'wizard', 'middle earth', 10, 6),
  createCharacter('bilbo', 'hobbit', 'the shire', 2, 1),
  createCharacter('frodo', 'hobbit', 'the shire', 3, 2),
  createCharacter('aragorn', 'man', 'dunnedain', 6, 8),
  createCharacter('legolas', 'elf', 'woodland realm', 8, 5)
];

characters[5] = createCharacter('arwen', 'half-elf', 'rivendell', 5, 5);

characters.find(function(character){
  return character.nickname === 'aragorn';
  
}).describe();

const justHobbits = characters.filter(character => character.race === 'hobbit');
const heavyHitters = characters.filter(character => character.attack > 5);

