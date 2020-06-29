let main = document.querySelector('#gradient');
let newHead = document.querySelector('h3');
let colorTwo = document.querySelector('.color2');
let colorOne = document.querySelector('.color1');


colorOne.addEventListener('input', (e) => {
  console.log(e.target.value);
  main.style.background = `linear-gradient(to right, ${e.target.value},${colorTwo.value})`;
  newHead.innerHTML = `linear-gradient --> to right, ${e.target.value}, ${colorTwo.value}`;
})


colorTwo.addEventListener('input', (e) => {
  console.log(e.target.value);
  main.style.background = `linear-gradient(to left,${e.target.value},${colorOne.value})`;
  newHead.innerHTML = `linear-gradient --> to left, ${e.target.value}, ${colorTwo.value}`;
})

