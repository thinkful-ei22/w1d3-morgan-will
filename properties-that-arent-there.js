'use strict';

const jobProfiler = function(name, jobTitle){
  this.name = name;
  this.jobTitle = jobTitle;
  if (jobTitle !== 'Owner') {
    this.boss = 'Spatz';
  }
};

const secretary = new jobProfiler('Cindy', 'Secretary');
const itGuy = new jobProfiler('Charles', 'IT Manager');
const chef = new jobProfiler('Mark', 'Chef');
const janitor = new jobProfiler('Janice', 'Janitor');
const spy = new jobProfiler('Spatz', 'Owner');
const peopleArray = [secretary, itGuy, chef, janitor, spy];

peopleArray.map(function(p) {
  if ('boss' in p) {
    console.log(`${p.jobTitle} ${p.name} report to ${p.boss}`);
  } else {
    console.log(`${p.jobTitle} ${p.name} doesn't report to anybody`);
  }
});