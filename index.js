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

// for each element in the array, append a node to the DOM
for (let i = 0; i < shuffled.length; i++) {
  // create a DOM element
  const ans = document.createElement('li');
  ans.innerHTML = shuffled[i];
  ans.className = 'answer';
  answerOl.append(ans);
}
