const words = [
    "apple", "banana", "chair", "drink", "email", "fancy", "great", "happy", "juice", "kite",
    "lemon", "magic", "night", "ocean", "piano", "quick", "rabbit", "smile", "table", "unique",
    "vivid", "wonder", "xylophone", "yellow", "zebra"
  ];
  
  function prolixitusMaximus() {
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
  
    console.log("Ok, I'm thinking of a word");
  
    let row = 1;
    let attempts = 5;
  
    while (attempts > 0) {
      let guessWhole = window.prompt("What is your guess?");
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
    }
  
    return console.log("\nBetter luck next time!");
  }
  
  prolixitusMaximus();
  