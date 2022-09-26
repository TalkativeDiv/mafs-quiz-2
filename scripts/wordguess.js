let [player1_name, player2_name] = [
  localStorage.getItem('abhis-math-game--name1'),
  localStorage.getItem('abhis-math-game--name2'),
];
let num1, num2, proper_answer;
let [player1_score, player2_score] = [0, 0];
const [num1Input, num2Input] = [
  document.getElementById('number1'),
  document.getElementById('number2'),
];
document.getElementById('player1_name').innerHTML +=
  player1_name + ' : <span id="player1_score"></span>';
document.getElementById('player2_name').innerHTML +=
  player2_name + ' : <span id="player2_score"></span>';

document.getElementById('player1_score').innerHTML = player1_score;
document.getElementById('player2_score').innerHTML = player2_score;

document.getElementById('player_question').innerHTML =
  'Question Turn - ' + player1_name;
document.getElementById('player_answer').innerHTML =
  'Answer Turn - ' + player2_name;
var word, get_word;
function send() {
  num1 = parseInt(num1Input.value);
  num2 = parseInt(num2Input.value);
  proper_answer = num1 * num2;
  document.getElementById('output').classList.remove('invisible');
  // TODO: Remove .innerHTML for security
  document.getElementById('output').innerHTML = `
  <h4 id="displayWord" class="text-blue-700">${num1} &times; ${num2}</h4>
  <br />
  <div>
<label for="#answer" class="text-blue-700">Answer </label>
  <input type="number" id="answer" placeholder="Enter Your Answer"       required       class="bg-blue-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none"
 />
  <br /><br />
  <button onclick='check()'           class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
>Check!</button>
  </div>
  `;
}

let question_turn = 'player1';
let answer_turn = 'player2';

function check() {
  const plyr_Ans = parseInt(document.getElementById('answer').value);
  console.log('answer in lower case - ' + answer);
  if (plyr_Ans == proper_answer) {
    if (answer_turn == 'player1') {
      player1_score = player1_score + 1;
      document.getElementById('player1_score').innerText = player1_score;
    } else {
      player2_score = player2_score + 1;
      document.getElementById('player2_score').innerText = player2_score;
    }
  }
  if (question_turn == 'player1') {
    question_turn = 'player2';
    document.getElementById('player_question').innerText =
      'Question Turn - ' + player2_name;
  } else {
    question_turn = 'player1';
    document.getElementById('player_question').innerText =
      'Question Turn - ' + player1_name;
  }

  if (answer_turn == 'player1') {
    answer_turn = 'player2';
    document.getElementById('player_answer').innerText =
      'Answer Turn - ' + player2_name;
  } else {
    answer_turn = 'player1';
    document.getElementById('player_answer').innerText =
      'Answer Turn - ' + player1_name;
  }

  document.getElementById('output').classList.add('invisible');
}


document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault()
  send()
})