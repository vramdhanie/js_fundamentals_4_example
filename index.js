const answers = [
  {
    title: 'Avengers: Endgame',
    year: 2019,
    role: 'Doctor Strange'
  },
  {
    title: 'Mowgli: Legend of the Jungle',
    year: 2018,
    role: 'Shere Khan'
  },
  {
    title: 'The Grinch',
    year: 2018,
    role: 'The Grinch'
  },
  {
    title: 'Avengers: Infinity War',
    year: 2018,
    role: 'Doctor Strange'
  },
  {
    title: 'Thor: Ragnarok',
    year: 2017,
    role: 'Doctor Strange'
  },
  {
    title: 'Doctor Strange',
    year: 2016,
    role: 'Doctor Stephen Strange'
  },
  {
    title: 'The Hobbit: Battle of the Five Armies',
    year: 2014,
    role: 'Smaug'
  },
  {
    title: 'The Imitation Game',
    year: 2014,
    role: 'Alan Turing'
  },
  {
    title: 'The Sisterhood of the Travelling Pants',
    year: 2005,
    role: 'Bridget'
  }
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

const elements = shuffled.map(function(movie) {
  return `<li>
      <div class="title">${movie.title} (${movie.year})</div>
      <div class="role">as ${movie.role}</div>
    </li>`;
});

answerOl.innerHTML = elements.join('');
