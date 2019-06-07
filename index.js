const answers = [
  'Number',
  'Boolean',
  'Null',
  'Undefined',
  'BigInt',
  'String',
  'Symbol',
  'Object',
  'Function',
  'Currency'
];

// Create a new empty array
const shuffled = [];

// loop over the answers array
for (let i = 0; i < answers.length; i++) {
  //generate a random index for shuffled
  const index = Math.floor(Math.random() * (shuffled.length + 1));
  //insert current element at index
  shuffled.splice(index, 0, answers[i]);
}

// get the answers element
const answerOl = document.querySelector('#answers');

const elements = shuffled.map(function(answer) {
  return '<li class="answer">' + answer + '</li>';
});

answerOl.innerHTML = elements.join('');
