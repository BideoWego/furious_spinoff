var faker = require('faker');


module.exports = () => {


  var subjects = {
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


  var keys = Object.keys(subjects);
  var index = Math.floor(Math.random() * keys.length * Date.now());
  var key = keys[index % keys.length];
  var subject = subjects[key];
  var action = subject[index % subject.length];
  subject = key;


  var temp = faker[subject][action]();
  var w = [];
  temp.split(' ').forEach((word) => {
    var cap = word[0].toUpperCase() + word.substr(1);
    w.push(cap);
  });
  w = w.join(' ');
  var sentences = [
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
  var index = Math.floor(Math.random() * sentences.length * Date.now());
  var title = sentences[index % sentences.length];


  return title;
};



