const activePlayer = document.getElementById('playerChoice');
let actiPlayer = 1;
let score = [0, 0];
activePlayer.innerText = `It's ${localStorage.getItem(
  `abhis-word-game--name${actiPlayer}`
)}'s turn to pick`;

document.getElementById('wordForm').addEventListener('submit', (e) => {
  e.preventDefault();
});

document.getElementById('playerScore').innerText = `
${localStorage.getItem(`abhis-word-game--name1`)}: ${
  score[0]
}  ${localStorage.getItem(`abhis-word-game--name2`)}: ${score[1]}
`;

let saveScore = (personNum) => {
  localStorage.setItem(`abhis-word-game--score${personNum}`, score[personNum]);
};

let updateScore = (personNum) => {
  score[personNum] += 1;
  saveScore(personNum);
};
updateScore(0);
