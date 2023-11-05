const words = [
  "apple", "banana", "chair", "drink", "email", "fancy", "great", "happy", "juice", "kite",
  "lemon", "magic", "night", "ocean", "piano", "quick", "rabbit", "smile", "table", "unique",
  "vivid", "wonder", "xylophone", "yellow", "zebra"
];

function prolixitusMaximus() {

  const Document = document.getElementById("quarto-document-content");

  const startButton = createButton("start", "Start", Document);

  const words5 = words.filter(word => word.length === 5);

  const guessResultFrame = {
    first: Array(5).fill(''),
    second: Array(5).fill(''),
    third: Array(5).fill(''),
    fourth: Array(5).fill(''),
    fifth: Array(5).fill('')
  };

  const randomIndex = Math.floor(Math.random() * words5.length);
  const word = words5[randomIndex].split('');

  Document.write(<h1>Ok, I'm thinking of a word</h1>);

  let row = 1;
  let attempts = 5;

  startButton.addEventListener('click', function () {

    const guessForm = createForm("guess-form", Document);

    const submitButton = createButton("submit", "Submit", document.getElementById("guess-form"));

    while (attempts > 0) {

      submitButton.addEventlistener("click", function () {

        let guessWhole = getElementbyId("submit").value;

        let guess = guessWhole.split('');

        if (guess.length === 5 && words5.includes(guessWhole)) {
          const guessResult = Array(5).fill('');
          const evaluation = Array(5).fill(false);

          for (let letter = 0; letter < 5; letter++) {
            if (guess[letter] === word[letter]) {
              guessResult[letter] = `correct: ${guess[letter]}`;
            } else if (word.includes(guess[letter])) {
              guessResult[letter] = `included: ${guess[letter]}`;
            } else {
              guessResult[letter] = `absent: ${guess[letter]}`;
            }

            evaluation[letter] = guessResult[letter] === `included: ${guess[letter]}` ||
              guessResult[letter] === `absent: ${guess[letter]}`;
          }

          const result = evaluation.some(item => item === true);

          if (!result) {
            guessResultFrame.row = guessResult;

            console.log(guessResultFrame);
            console.log("\nWe have ourselves a winner. Congratulations! ;-)");
            return console.log("Thanks for playing!");
          } else {
            console.log(`Hmmm... Not quite.\nYou have ${attempts - 1} tries left.`);
            guessResultFrame.row = guessResult;
          }

          console.log(guessResultFrame);
        } else {
          console.log("Check that your spelling and word length are correct\nand try again.");
          row--;
          attempts++;
        }

        attempts--;
        row++;
      });

    }

  });

  return console.log("\nBetter luck next time!");
}

prolixitusMaximus();

// The code for prolixitusMaximus() was adapted from a chatGPT translation of the original R code written by Rhys Tilford.





// create the form elements and add them to the DOM
function createForm(id, parent) {

  // create a new form element
  const newform = document.createElement("form");

  // add the id to the form
  newform.id = id;

  // append the form to the parent
  parent.appendChild(newform);

  // return the form
  return newform;

};

// create the button elements and append them to the DOM
function createButton(id, label, parent) {

  // create a new button element
  const newbutton = document.createElement("button");

  // add the text to the button
  newbutton.innerText = label;

  // add the id to the button
  newbutton.id = id;

  // append the button to the parent
  parent.appendChild(newbutton);

  // return the button
  return newbutton;

};