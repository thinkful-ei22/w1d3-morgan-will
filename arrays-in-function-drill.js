'use strict';
const jobProfiler = function(name, jobTitle){
  this.name = name;
  this.jobTitle = jobTitle;
};

const secretary = new jobProfiler('Cindy', 'Secretary');
const itGuy = new jobProfiler('Charles', 'IT Manager');
const chef = new jobProfiler('Mark', 'Chef');
const janitor = new jobProfiler('Janice', 'Janitor');
const spy = new jobProfiler('Spatz', "Spy");
const peopleArray = [secretary, itGuy, chef, janitor, spy];

peopleArray.map(p => console.log(`${p.name} ${p.jobTitle}`));