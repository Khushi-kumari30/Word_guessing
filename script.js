// --- Word Bank with General Knowledge Clues ---
const WORDS = [
  // --- Moderate Difficulty ---
  { word: 'CANBERRA', clue: 'Capital city of Australia' },
  { word: 'EVEREST', clue: 'Tallest mountain on Earth' },
  { word: 'AMAZON', clue: 'Largest rainforest in the world' },
  { word: 'GRAVITY', clue: 'Force that keeps us on the ground' },
  { word: 'OLYMPICS', clue: 'International multi-sport event held every four years' },
  { word: 'SHAKESPEARE', clue: 'English playwright who wrote Hamlet' },
  { word: 'SAHARA', clue: 'World’s largest hot desert' },
  { word: 'MAMMAL', clue: 'Warm-blooded animal with hair or fur' },
  { word: 'PHOTOSYNTHESIS', clue: 'Process plants use to make food from sunlight' },
  { word: 'VACCINE', clue: 'Substance that provides immunity to disease' },
  { word: 'ORCHESTRA', clue: 'Large group of musicians playing together' },
  { word: 'JUPITER', clue: 'Largest planet in our solar system' },
  { word: 'TITANIC', clue: 'Famous ship that sank in 1912' },
  { word: 'MOZART', clue: 'Famous classical composer from Austria' },
  { word: 'ECLIPSE', clue: 'When the sun or moon is obscured' },
  { word: 'GIRAFFE', clue: 'Tallest land animal' },
  { word: 'VATICAN', clue: 'Smallest country in the world' },
  { word: 'NIAGARA', clue: 'Famous waterfall between USA and Canada' },
  { word: 'SPHINX', clue: 'Mythical creature with a lion’s body and human head' },
  { word: 'ORION', clue: 'Prominent constellation named after a hunter' },
  { word: 'VENUS', clue: 'Second planet from the sun' },
  { word: 'TAJ MAHAL', clue: 'Famous white marble mausoleum in India' },
  { word: 'SUSHI', clue: 'Japanese dish with rice and fish' },
  { word: 'BICYCLE', clue: 'Two-wheeled vehicle powered by pedaling' },
  { word: 'CARNIVORE', clue: 'Animal that eats meat' },
  // --- Easy & General ---
  { word: 'APPLE', clue: 'A common red or green fruit' },
  { word: 'DOG', clue: 'A popular pet that barks' },
  { word: 'SUN', clue: 'The star at the center of our solar system' },
  { word: 'CAR', clue: 'A vehicle with four wheels' },
  { word: 'BLUE', clue: 'The color of the sky on a clear day' },
  { word: 'CAT', clue: 'A pet that purrs and chases mice' },
  { word: 'MILK', clue: 'A white drink from cows' },
  { word: 'BIRD', clue: 'An animal that can fly' },
  { word: 'TREE', clue: 'A tall plant with a trunk and branches' },
  { word: 'FISH', clue: 'An animal that lives in water and has gills' },
  { word: 'EGG', clue: 'Laid by chickens, eaten for breakfast' },
  { word: 'BOOK', clue: 'You read this to learn or for fun' },
  { word: 'CAKE', clue: 'A sweet dessert often eaten at birthdays' },
  { word: 'CHAIR', clue: 'You sit on this' },
  { word: 'BANANA', clue: 'A long yellow fruit' },
  { word: 'DUCK', clue: 'A bird that quacks and swims' },
  { word: 'MOON', clue: 'Earth’s natural satellite' },
  { word: 'RAIN', clue: 'Water that falls from clouds' },
  { word: 'BALL', clue: 'A round object used in many sports' },
  { word: 'SHOE', clue: 'You wear this on your foot' },
  { word: 'FROG', clue: 'A green animal that jumps and croaks' },
  { word: 'CAKE', clue: 'Sweet baked dessert, often with candles' },
  { word: 'BREAD', clue: 'You use this to make a sandwich' },
  { word: 'PEN', clue: 'You use this to write' },
  { word: 'NOSE', clue: 'You use this to smell' },
  { word: 'HAND', clue: 'You use this to hold things' },
  { word: 'WATER', clue: 'Clear liquid you drink every day' },
  { word: 'SCHOOL', clue: 'A place where children go to learn' },
  { word: 'HOUSE', clue: 'A building where people live' },
  { word: 'BAG', clue: 'You use this to carry things' },
  // --- Existing General Knowledge ---
  { word: 'PYRAMID', clue: 'Ancient triangular structure in Egypt' },
  { word: 'EVEREST', clue: 'Highest mountain in the world' },
  { word: 'ATLANTIC', clue: 'Ocean between America and Europe/Africa' },
  { word: 'MERCURY', clue: 'Smallest planet in our solar system' },
  { word: 'SHAKESPEARE', clue: 'Famous English playwright' },
  { word: 'OLYMPICS', clue: 'International multi-sport event' },
  { word: 'VACCINE', clue: 'Substance that provides immunity' },
  { word: 'ORCHESTRA', clue: 'Large group of musicians' },
  { word: 'KANGAROO', clue: 'Australian marsupial that hops' },
  { word: 'VOLCANO', clue: 'Mountain that erupts lava' },
  { word: 'EINSTEIN', clue: 'Theory of relativity scientist' },
  { word: 'AMAZON', clue: 'Largest rainforest in the world' },
  { word: 'SAHARA', clue: 'World’s largest hot desert' },
  { word: 'JUPITER', clue: 'Largest planet in our solar system' },
  { word: 'TITANIC', clue: 'Famous sunken ship' },
  { word: 'MOZART', clue: 'Famous classical composer' },
  { word: 'BAMBOO', clue: 'Panda’s favorite food' },
  { word: 'ECLIPSE', clue: 'When the sun or moon is obscured' },
  { word: 'GIRAFFE', clue: 'Tallest land animal' },
  { word: 'VATICAN', clue: 'Smallest country in the world' },
  { word: 'NIAGARA', clue: 'Famous waterfall between USA and Canada' },
  { word: 'SPHINX', clue: 'Mythical creature with a lion’s body and human head' },
  { word: 'ORION', clue: 'Prominent constellation named after a hunter' },
  { word: 'MARS', clue: 'Known as the Red Planet' },
  { word: 'KOALA', clue: 'Australian animal that eats eucalyptus' },
  { word: 'TULIP', clue: 'Popular spring flower from the Netherlands' },
  { word: 'EVEREST', clue: 'Tallest mountain on Earth' },
  { word: 'ATLANTIS', clue: 'Legendary lost city' },
  { word: 'PENGUIN', clue: 'Flightless bird living in Antarctica' },
  { word: 'MONA LISA', clue: 'Famous painting by Leonardo da Vinci' },
  { word: 'VENUS', clue: 'Second planet from the sun' },
  { word: 'BISON', clue: 'Large animal native to North America' },
  { word: 'TAJ MAHAL', clue: 'Famous white marble mausoleum in India' },
  { word: 'YOGA', clue: 'Physical, mental, and spiritual practice from India' },
  { word: 'SUSHI', clue: 'Japanese dish with rice and fish' },
  { word: 'EAGLE', clue: 'Bird symbolizing freedom in the USA' },
  { word: 'BICYCLE', clue: 'Two-wheeled vehicle powered by pedaling' },
  { word: 'CARNIVORE', clue: 'Animal that eats meat' },
  { word: 'OASIS', clue: 'Fertile spot in a desert' },
  { word: 'IGLOO', clue: 'Dome-shaped snow house' },
  { word: 'PLUTO', clue: 'Dwarf planet once considered the ninth planet' },
  { word: 'SILK', clue: 'Luxurious fabric made by worms' },
  { word: 'BUDDHA', clue: 'Founder of Buddhism' },
  { word: 'PIZZA', clue: 'Popular Italian dish with cheese and tomato' },
  { word: 'SPUTNIK', clue: 'First artificial satellite' },
  { word: 'COLUMBUS', clue: 'Explorer who sailed to the Americas in 1492' },
  { word: 'PYTHON', clue: 'Large snake or a programming language' },
  { word: 'MUMMY', clue: 'Preserved body from ancient Egypt' },
  { word: 'TIGER', clue: 'Largest cat species' },
  { word: 'BAMBOO', clue: 'Tall grass eaten by pandas' },
  { word: 'OPERA', clue: 'Dramatic work combining text and music' },
  { word: 'CAVIAR', clue: 'Delicacy made from fish eggs' },
  { word: 'EVEREST', clue: 'Highest mountain in the world' },
  { word: 'CENTAUR', clue: 'Mythical creature, half human, half horse' },
  { word: 'SAPPHIRE', clue: 'Blue precious gemstone' },
  { word: 'KIMONO', clue: 'Traditional Japanese garment' },
  { word: 'BISON', clue: 'Large, shaggy animal of North America' },
  { word: 'GAZELLE', clue: 'Graceful antelope of Africa and Asia' },
  { word: 'CROCODILE', clue: 'Large reptile with a powerful jaw' },
  { word: 'FJORD', clue: 'Long, narrow sea inlet between cliffs' },
  { word: 'QUASAR', clue: 'Extremely luminous active galactic nucleus' },
  { word: 'SLOTH', clue: 'Slow-moving tree-dwelling mammal' },
  { word: 'TUNDRA', clue: 'Treeless Arctic plain' },
  { word: 'VIKING', clue: 'Norse explorer and warrior' },
  { word: 'WALTZ', clue: 'Ballroom dance in triple time' },
  { word: 'ZEBRA', clue: 'African animal with black and white stripes' },
  { word: 'QUOKKA', clue: 'Small marsupial from Australia, known for smiling' },
  { word: 'DODO', clue: 'Extinct flightless bird from Mauritius' },
  { word: 'LOTUS', clue: 'Sacred flower in many Asian cultures' },
  { word: 'MOSAIC', clue: 'Art made from small pieces of colored glass or stone' },
  { word: 'NILE', clue: 'Longest river in Africa' },
  { word: 'ORCA', clue: 'Also known as the killer whale' },
  { word: 'PAGODA', clue: 'Tiered tower with multiple eaves, found in Asia' },
  { word: 'QUARTZ', clue: 'Common mineral, often used in watches' },
  { word: 'RHINO', clue: 'Large animal with one or two horns on its snout' },
  { word: 'SAVANNA', clue: 'Grassy plain in tropical and subtropical regions' },
  { word: 'TANGO', clue: 'Dramatic partner dance from Argentina' },
  { word: 'UMBRELLA', clue: 'Device for protection against rain' },
  { word: 'VULTURE', clue: 'Scavenging bird of prey' },
  { word: 'WOMBAT', clue: 'Burrowing marsupial from Australia' },
  { word: 'XYLOPHONE', clue: 'Musical instrument with wooden bars' },
  { word: 'YACHT', clue: 'Luxury boat' },
  { word: 'ZUCCHINI', clue: 'Green summer squash' },
  { word: 'ALMOND', clue: 'Nut often used in marzipan' },
  { word: 'BALLET', clue: 'Classical dance form' },
  { word: 'CANYON', clue: 'Deep gorge, often with a river' },
  { word: 'DOLPHIN', clue: 'Intelligent marine mammal' },
  { word: 'EUCALYPTUS', clue: 'Tree native to Australia, koalas eat its leaves' },
  { word: 'FALCON', clue: 'Bird of prey known for its speed' },
  { word: 'GOBI', clue: 'Large desert in Asia' },
  { word: 'HIBISCUS', clue: 'Tropical flower with large petals' },
  { word: 'IGUANA', clue: 'Large lizard found in Central and South America' },
  { word: 'JASMINE', clue: 'Fragrant white flower' },
  { word: 'KOMODO', clue: 'Largest species of lizard' },
  { word: 'LEMUR', clue: 'Primate native to Madagascar' },
  { word: 'MANDARIN', clue: 'Type of orange and a Chinese dialect' },
  { word: 'NARWHAL', clue: 'Whale with a long spiral tusk' },
  { word: 'OSTRICH', clue: 'Largest living bird' },
  { word: 'PEACOCK', clue: 'Bird with colorful tail feathers' },
  { word: 'QUAIL', clue: 'Small ground-dwelling bird' },
  { word: 'RUBY', clue: 'Red precious gemstone' },
  { word: 'SAPPHIRE', clue: 'Blue precious gemstone' },
  { word: 'TORTOISE', clue: 'Land-dwelling reptile with a shell' },
  { word: 'URANUS', clue: 'Seventh planet from the sun' },
  { word: 'VIOLET', clue: 'Purple flower and a color' },
  { word: 'WISTERIA', clue: 'Climbing plant with purple flowers' },
  { word: 'XENON', clue: 'Noble gas used in lamps' },
  { word: 'YETI', clue: 'Mythical creature said to inhabit the Himalayas' },
  { word: 'ZEBRA', clue: 'Striped animal from Africa' },
  { word: 'ACORN', clue: 'Nut of the oak tree' },
  { word: 'BISON', clue: 'Large, shaggy animal of North America' },
  { word: 'CORAL', clue: 'Marine organism that forms reefs' },
  { word: 'DRAGON', clue: 'Mythical fire-breathing creature' },
  { word: 'EMBER', clue: 'Glowing piece of coal or wood' },
  { word: 'FJORD', clue: 'Long, narrow sea inlet between cliffs' },
  { word: 'GAZELLE', clue: 'Graceful antelope of Africa and Asia' },
  { word: 'HORIZON', clue: 'Line where earth and sky appear to meet' },
  { word: 'INK', clue: 'Liquid used for writing or printing' },
  { word: 'JAGUAR', clue: 'Large spotted cat of the Americas' },
  { word: 'KELP', clue: 'Large brown seaweed' },
  { word: 'LAGOON', clue: 'Shallow body of water separated from a sea' },
  { word: 'MOOSE', clue: 'Large deer with broad antlers' },
  { word: 'NEST', clue: 'Structure built by birds to lay eggs' },
  { word: 'OASIS', clue: 'Fertile spot in a desert' },
  { word: 'PANDA', clue: 'Black and white bear from China' },
  { word: 'QUOKKA', clue: 'Small marsupial from Australia, known for smiling' },
  { word: 'RAVEN', clue: 'Large black bird known for intelligence' },
  { word: 'SLOTH', clue: 'Slow-moving tree-dwelling mammal' },
  { word: 'TIGER', clue: 'Large striped cat' },
  { word: 'URCHIN', clue: 'Spiny sea creature' },
  { word: 'VULTURE', clue: 'Scavenging bird of prey' },
  { word: 'WALRUS', clue: 'Large marine mammal with tusks' },
  { word: 'XENOPS', clue: 'Small bird found in Central and South America' },
  { word: 'YAM', clue: 'Starchy root vegetable' },
  { word: 'ZEBRA', clue: 'African animal with black and white stripes' }
];
const MAX_LIVES = 6;

let chosenWord = '';
let chosenClue = '';
let guessedLetters = [];
let wrongGuesses = 0;
let gameOver = false;

const wordDisplay = document.getElementById('word-display');
const clueDisplay = document.getElementById('clue');
const keyboard = document.getElementById('keyboard');
const lifeMeter = document.getElementById('life-meter');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restart-btn');
const confetti = document.getElementById('confetti');

// --- Utility Functions ---
function pickWord() {
  const entry = WORDS[Math.floor(Math.random() * WORDS.length)];
  return entry;
}

function renderWord() {
  wordDisplay.innerHTML = '';
  for (let i = 0; i < chosenWord.length; i++) {
    const letter = chosenWord[i];
    const box = document.createElement('div');
    box.className = 'letter-box' + (guessedLetters.includes(letter) ? ' filled' : '');
    box.textContent = guessedLetters.includes(letter) ? letter : '';
    wordDisplay.appendChild(box);
  }
}

function renderClue() {
  clueDisplay.textContent = 'Clue: ' + chosenClue;
}

function renderKeyboard() {
  const A = 65, Z = 90;
  keyboard.innerHTML = '';
  for (let code = A; code <= Z; code++) {
    const letter = String.fromCharCode(code);
    const btn = document.createElement('button');
    btn.className = 'key';
    btn.textContent = letter;
    btn.disabled = guessedLetters.includes(letter) || gameOver || wrongGuessesList().includes(letter);
    btn.addEventListener('click', () => handleGuess(letter));
    keyboard.appendChild(btn);
  }
}

function renderLifeMeter() {
  lifeMeter.innerHTML = '';
  for (let i = 0; i < MAX_LIVES; i++) {
    const life = document.createElement('span');
    life.className = 'life' + (i < wrongGuesses ? ' lost' : '');
    lifeMeter.appendChild(life);
  }
}

function wrongGuessesList() {
  // Returns array of wrong guessed letters
  return guessedLetters.filter(l => !chosenWord.includes(l));
}

function showMessage(msg, color = '#2a3a5e') {
  message.textContent = msg;
  message.style.color = color;
}

function shakeWord() {
  wordDisplay.classList.add('shake');
  setTimeout(() => wordDisplay.classList.remove('shake'), 400);
}

function showConfetti() {
  confetti.innerHTML = '';
  const colors = ['#f7d51d', '#e74c3c', '#2ecc71', '#3498db', '#9b59b6', '#f39c12'];
  for (let i = 0; i < 32; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.left = Math.random() * 95 + '%';
    piece.style.top = '-24px';
    piece.style.transform = `rotateZ(${Math.random()*360}deg)`;
    piece.style.animationDelay = (Math.random() * 0.5) + 's';
    confetti.appendChild(piece);
  }
  setTimeout(() => { confetti.innerHTML = ''; }, 1800);
}

// --- Game Logic ---
function handleGuess(letter) {
  if (gameOver || guessedLetters.includes(letter)) return;
  guessedLetters.push(letter);
  if (chosenWord.includes(letter)) {
    renderWord();
    renderKeyboard();
    if (isWin()) {
      showMessage('🎉 You Win! The word was "' + chosenWord + '"', '#27ae60');
      showConfetti();
      gameOver = true;
      restartBtn.style.display = 'inline-block';
    }
  } else {
    wrongGuesses++;
    renderLifeMeter();
    renderKeyboard();
    shakeWord();
    if (wrongGuesses >= MAX_LIVES) {
      showMessage('😢 Game Over! The word was "' + chosenWord + '"', '#e74c3c');
      gameOver = true;
      revealWord();
      restartBtn.style.display = 'inline-block';
    }
  }
}

function isWin() {
  return chosenWord.split('').every(l => guessedLetters.includes(l));
}

function revealWord() {
  // Reveal all letters
  wordDisplay.innerHTML = '';
  for (let i = 0; i < chosenWord.length; i++) {
    const letter = chosenWord[i];
    const box = document.createElement('div');
    box.className = 'letter-box filled';
    box.textContent = letter;
    wordDisplay.appendChild(box);
  }
}

function resetGame() {
  const entry = pickWord();
  chosenWord = entry.word;
  chosenClue = entry.clue;
  guessedLetters = [];
  wrongGuesses = 0;
  gameOver = false;
  showMessage('');
  renderWord();
  renderClue();
  renderKeyboard();
  renderLifeMeter();
  restartBtn.style.display = 'none';
  confetti.innerHTML = '';
}

// --- Event Listeners ---
keyboard.addEventListener('mousedown', e => {
  if (e.target.classList.contains('key')) {
    e.target.blur();
  }
});

document.addEventListener('keydown', e => {
  if (gameOver) return;
  const letter = e.key.toUpperCase();
  if (letter.length === 1 && letter >= 'A' && letter <= 'Z') {
    handleGuess(letter);
  }
});

restartBtn.addEventListener('click', resetGame);

// --- Init ---
resetGame(); 