const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name1 = document.getElementById('exampleInputName1');
  const name2 = document.getElementById('exampleInputName2');
  localStorage.setItem('abhis-math-game--name1', name1.value);
  localStorage.setItem('abhis-math-game--name2', name2.value);
  window.location.href = '/game.html';
});
