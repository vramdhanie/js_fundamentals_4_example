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

// get the answers element
const answerOl = document.querySelector('#answers');

// for each element in the array, append a node to the DOM
const answerList = answers
  .map(function(answer) {
    return '<li class="answers">' + answer + '</li>';
  })
  .join('');

answerOl.innerHTML = answerList;
