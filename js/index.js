import {cards} from './cards.js';

const drawBtn = document.querySelector('#draw-btn');
const resetBtn = document.querySelector('#reset-btn');
const continueBtn = document.querySelector('#continue');
const newBtn = document.querySelector('#new');

let index = [];

// add id prop in card
function resetIndexes(){
  index = [];
  for (let i=0; i<cards.length; i++){
    index.push(i);
  }
}
function createQuizBox(card){
  const quiz = document.createElement('h2');
  quiz.className = 'quiz'
  const quizText = document.createTextNode(card.body);
  quiz.appendChild(quizText);

  const minValue = document.createElement('p');
  minValue.className = 'opt'
  const minText = document.createTextNode('1. ' + card.min);
  minValue.appendChild(minText);

  const maxValue = document.createElement('p');
  maxValue.className = 'opt'
  const maxText = document.createTextNode('10. ' + card.max);
  maxValue.appendChild(maxText);

  const valueBox = document.createElement('div');
  valueBox.className = 'opt-box'
  valueBox.append(minValue, maxValue);

  const newDiv = document.createElement('div');
  newDiv.className = 'card'
  newDiv.append(quiz, valueBox);
  
  document.body.appendChild(newDiv);
}
function getRandomNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  let num = Math.floor(Math.random() * (max - min) + min);
  return num;
}
function checkNum(){
  let numIdx = getRandomNumber(0, index.length);
  let cardIdx = index[numIdx];
  index.splice(numIdx, 1);
  
  return cardIdx;
}
function updateLocal(newCard){
  if(localStorage.used !== undefined){
    const usedNumbers = localStorage.getItem('used')
    localStorage.setItem('used', `${usedNumbers},${newCard}`);
    console.log(localStorage.used);
  } else {
    localStorage.setItem('used', newCard);
    console.log(localStorage.used);
  }
  
}
function drawCard(){
  const cardIdx = checkNum();
  const selectedCard = cards[cardIdx];
  console.log(selectedCard);
  createQuizBox(selectedCard);
  updateLocal(cardIdx);
}
function checkRestCards(){
  if(index.length > 0){
    drawCard();
    console.log('rest cards:', index.length);
  } else {
    let index = [];
    for (let i=0; i<cards.length;i++){
      index.push(i);
    }
    alert("카드를 모두 사용하셨습니다!");
  }
}

/* base code */
resetIndexes();

resetBtn.addEventListener('click', () => {
  resetIndexes();
  localStorage.clear();
  alert("초기화되었어요!");
});

drawBtn.addEventListener('click',() => {
  const oldCard = document.querySelector('.card');
  oldCard.remove();
  checkRestCards()
});

continueBtn.addEventListener('click',() => {

});

newBtn.addEventListener('click', () => {
  const oldCard = document.querySelector('.card');
  oldCard.remove();
  checkRestCards()
});





