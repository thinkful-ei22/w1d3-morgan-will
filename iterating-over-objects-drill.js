let cards = {
  foo: 'heart',
  bar: 'diamond',
  fum: 'spade',
  quux: 'club',
  spam: 'joker',
};

for (const x in cards){
console.log(`${cards[x]}`);
};