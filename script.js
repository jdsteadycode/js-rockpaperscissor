// highlights!
const simpleToast = (comp, user, outcome) => {

  // Get the SIMPLE-TOAST DIV
  const toast = document.getElementById("simpleToast");

  // show-score based on outcome!
  // win!
  if (outcome === "YOU WIN!") {

    toast.innerHTML = `✅ <span>USER: ${user} COMPUTER: ${comp} OUTCOME: ${outcome}</span>`;
  }
  // lost!
  if (outcome === "YOU LOST!") {

    toast.innerHTML = `❌ <span>USER: ${user} COMPUTER: ${comp} OUTCOME: ${outcome}</span>`;
  }
  // tie!
  if (outcome === "TIE!") {

    toast.innerHTML = `⚠️ <span>USER: ${user} COMPUTER: ${comp} OUTCOME: ${outcome}</span>`;
  }

  // Add the "show" class to DIV
  toast.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function() { toast.className = toast.className.replace("show", ""); }, 1800);
}

// score!
// fetch-from-localStorage.
// convert back-2-Obj!
let savedScore = localStorage.getItem('score');

// fetch-score
let score = JSON.parse(savedScore);

// check-score exists || not !!
!score ? score = { won: 0, lost: 0, tie: 0 } : score;

// handle-score
const viewScore = (initialScore) => {

  // showcase-initialScores!!
  document.querySelector('.content-score').innerHTML = `
    <p>😇 WON: ${initialScore.won}</p> 
    <p>🙄 LOST: ${initialScore.lost}</p>
    <p>😉 TIE: ${initialScore.tie}</p>
  `;

}

// view-score...
viewScore(score);

// Computer-Choice
const handleComputerChoice = () => {

  // Random Number 0 -> 2
  let randomNo = Math.floor(Math.random() * 3);

  // control-choices
  if (randomNo === 0) {

    // rock (:
    return 'Rock';
  }

  else if (randomNo === 1) {

    // paper (:
    return 'Paper';
  }

  else {

    // scissor (:
    return 'Scissor';
  }

}

// Outcome!
const handleFinalOutcome = (user) => {

  // computerPlay...
  let comp = handleComputerChoice();
  // console.log(comp);

  // outocome
  let outcome = '';

  // control-output!
  // 1. user: rock
  if (user === 'Rock') {

    // Both rock!
    if (comp === 'Rock' && user === 'Rock') {

      outcome = 'TIE!';
    }

    // Comp: paper User: rock!
    else if (comp === 'Paper' && user === 'Rock') {

      outcome = 'YOU LOST!';
    }

    // Comp: scissor User: rock!!
    else {

      outcome = 'YOU WIN!';
    }
  }

  // 2. user: paper
  if (user === 'Paper') {

    // Comp: rock User: paper!
    if (comp === 'Rock' && user === 'Paper') {

      outcome = 'YOU WIN!';
    }

    // Both paper!
    else if (comp === 'Paper' && user === 'Paper') {

      outcome = 'TIE!';
    }

    // Comp: scissor User: paper!!
    else {

      outcome = 'YOU LOST!';
    }
  }

  // 3. user: scissor
  if (user === 'Scissor') {

    // Comp: rock User: scissor!
    if (comp === 'Rock' && user === 'Scissor') {

      outcome = 'YOU LOST!';
    }

    // Comp: paper User: scissor!
    else if (comp === 'Paper' && user === 'Scissor') {

      outcome = 'YOU WIN!';
    }

    // Both scissor!
    else {

      outcome = 'TIE!';
    }
  }

  // maintain-score!
  // won!
  if (outcome === 'YOU WIN!') {

    score.won += 1;
  }
  // lost!
  else if (outcome === 'YOU LOST!') {

    score.lost += 1;
  }
  // tie!
  else if (outcome === 'TIE!') {

    score.tie += 1;
  }

  // save-score!
  // -> score to String as JSON only supports String!!
  localStorage.setItem('score', JSON.stringify(score));

  // highlight...
  simpleToast(comp, user, outcome);

  // scores..
  viewScore(score);

}


// Reset-Score ->
const handleScoreReset = () => {

  // set back -> 0...
  score.won = 0;
  score.tie = 0;
  score.lost = 0;

  // free from storage!
  localStorage.removeItem('score');

  // view-score!
  viewScore(score);

}