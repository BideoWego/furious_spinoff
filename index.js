const faker = require('faker');
const subjects = {
  company: [
    'bsAdjective',
    'bsBuzz',
    'bsNoun'
  ],
  hacker: [
    'adjective',
    'noun',
    'verb',
    'ingverb',
    'phrase'
  ],
  random: [
    'word'
  ]
};


module.exports = () => {

  let keys = Object.keys(subjects);
  let index = Math.floor(Math.random() * keys.length * Date.now());
  let key = keys[index % keys.length];
  let subject = subjects[key];
  var action = subject[index % subject.length];
  subject = key;


  let temp = faker[subject][action]();
  let w = [];

  temp.split(' ').forEach((word) => {
    var cap = word[0].toUpperCase() + word.substr(1);
    w.push(cap);
  });

  w = w.join(' ');

  const sentences = [
    `The ${ w } and the Furious`,
    `The Fast and the ${ w }`,
    `2 ${ w } 2 Furious`,
    `2 Fast 2 ${ w }`,
    `The ${ w } and the Furious: Tokyo Drift`,
    `The Fast and the ${ w }: Tokyo Drift`,
    `The Fast and the Furious: ${ w } Drift`,
    `The Fast and the Furious: Tokyo ${ w }`,
    `${ w } & Furious`,
    `Fast & ${ w }`,
    `Fast ${ w }`,
    `${ w } & Furious 6`,
    `Fast & ${ w } 6`,
    `Furious ${ w }`,
    `The ${ w } of the Furious`
  ];
  
  index = Math.floor(Math.random() * sentences.length * Date.now());
  let title = sentences[index % sentences.length];

  return title;
};



