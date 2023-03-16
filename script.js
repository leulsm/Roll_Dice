'use strict';

// DECLARATION
const resturtBtn = document.querySelector('.restart');
const suffleBtn = document.querySelector('.Suffle');
const saveBtn = document.querySelector('.save');

const firsttotalscore = document.querySelector('.ftotalScore');
const firstcurrentscore = document.querySelector('.fcurrentScore');
const firstOverlay = document.querySelector('.foverlay');

const secondtotalscore = document.querySelector('.stotalscore');
const secondcurrentscore = document.querySelector('.scurrentscore');
const secondOverlay = document.querySelector('.soverlay');

const firstwin = document.querySelector('.fwin');
const secondwin = document.querySelector('.swin');

const suffleImage = document.querySelector('.suffleImage');

var ftotalscore = 0;
var stotalscore = 0;
var currntscore = 0;

const imageArray = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];

var t = true;
changestate(t);
suffleImage.innerHTML = `<img src="null.png" alt="" class="imgs"/>`;

function changestate(turn) {
  console.log(turn);

  if (turn === true) {
    firstOverlay.classList.add('hidden');
    secondOverlay.classList.remove('hidden');
  } else if (turn === false) {
    firstOverlay.classList.remove('hidden');
    secondOverlay.classList.add('hidden');
  }
}
function displayscore(turn) {
  if (turn == true) {
    firstcurrentscore.textContent = currntscore;
  } else if (turn == false) {
    secondcurrentscore.textContent = currntscore;
  }
}

suffleBtn.addEventListener('click', function () {
  const randomSuffle = Math.floor(Math.random() * 6);
  suffleImage.innerHTML = `<img src="${imageArray[randomSuffle]}" alt="" class="imgs"/>`;

  if (randomSuffle == 0) {
    currntscore = 0;
    firstcurrentscore.textContent = currntscore;
    secondcurrentscore.textContent = currntscore;

    t = !t;
    changestate(t);
  } else {
    currntscore += randomSuffle + 1;
    console.log(randomSuffle);
    console.log(currntscore);

    displayscore(t);
  }
});

resturtBtn.addEventListener('click', function () {
  console.log(currntscore);
  suffleBtn.disabled = false;
  saveBtn.disabled = false;

  ftotalscore = 0;
  stotalscore = 0;
  currntscore = 0;

  firsttotalscore.textContent = ftotalscore;
  secondtotalscore.textContent = stotalscore;
  firstwin.classList.add('hidden');
  secondwin.classList.add('hidden');

  t = true;
  changestate(t);
});

saveBtn.addEventListener('click', function () {
  if (t == true) {
    ftotalscore += currntscore;
    firsttotalscore.textContent = ftotalscore;
    firstcurrentscore.textContent = currntscore;
    currntscore = 0;
    displayscore(t);
    t = false;
  } else {
    stotalscore += currntscore;
    secondcurrentscore.textContent = currntscore;
    secondtotalscore.textContent = stotalscore;

    currntscore = 0;
    displayscore(t);
    t = true;
  }
  suffleImage.innerHTML = `<img src="null.png" alt="" class="imgs"/>`;
  if (ftotalscore >= 100) {
    firstwin.classList.remove('hidden');
    firstOverlay.classList.remove('hidden');

    suffleBtn.disabled = true;
    saveBtn.disabled = true;
  } else if (stotalscore >= 100) {
    secondwin.classList.remove('hidden');
    secondOverlay.classList.remove('hidden');
    suffleBtn.disabled = true;
    saveBtn.disabled = true;
  } else if (ftotalscore < 100 && stotalscore < 100) {
    changestate(t);
  }
});
