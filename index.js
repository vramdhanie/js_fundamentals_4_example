const answers = [
  "Number",
  "Boolean",
  "Null",
  "Undefined",
  "BigInt",
  "String",
  "Symbol",
  "Object",
  "Function",
  "Currency"
];

// get the answers element
const answerDiv = document.querySelector("#answers");

// for each element in the array, append a node to the DOM
for (let i = 0; i < answers.length; i++) {
  // create a DOM element
  const ans = document.createElement("li");
  ans.innerHTML = answers[i];
  ans.className = "answer";
  answerDiv.append(ans);
}
