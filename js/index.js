import {cards} from './cards.js';

let title = document.querySelector('#title');
const anchor = document.querySelector('#anchor');
const drawBtn = document.querySelector('#draw-btn');
const resetBtn = document.querySelector('#reset-btn');
let oldCard = document.querySelector('.card');

resetBtn.addEventListener('click', () => {
  localStorage.setItem('used', '0');
  console.log(localStorage);
  alert("초기화되었어요!");
})


if(localStorage.getItem('used') === null){
  localStorage.setItem('used', '0');
}


// add id prop in card
for (let i=0; i<cards.length; i++){
  const card = cards[i];
  card.id = i+2;
}
console.log(cards);

function getRandomNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  let num = Math.floor(Math.random() * (max - min) + min);
  return num;

}

function selectCard(cards, num){
  let result;

  for (let i=0; i<cards.length; i++){
    const card = cards[i];
    if(card.id === num){
      result = card;
      break;
    }
  }
  return result;
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

function DrawCard(){

  // Generate card id
  let usedNumbers = localStorage.getItem('used');
  
  let cardNum = getRandomNumber(2, cards.length+2);
  if (usedNumbers.split(',').length < cards.length+1){
    // generate Number
    while(usedNumbers.includes(cardNum)){
    cardNum = getRandomNumber(2, cards.length+2);
    }
  } else {
    // clear localStorage
    alert("남은 카드가 없어요!");
  }
  
  localStorage.setItem('used', `${usedNumbers},${cardNum}`);
  console.log(localStorage);
  
  const selectedCard = selectCard(cards, cardNum);
  
  createQuizBox(selectedCard);

}

drawBtn.addEventListener('click',() => {
  if(oldCard){
    oldCard.remove();
  }
  DrawCard();
  oldCard = document.querySelector('.card');
});











