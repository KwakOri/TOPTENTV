import {cards} from './cards.js';

let title = document.querySelector('#title');
const anchor = document.querySelector('#anchor');
const btn = document.querySelector('#btn');
let oldCard = document.querySelector('.card');

// add id prop in card
for (let i=0; i<cards.length; i++){
  const card = cards[i];
  card.id = i+1;
}

function DrawCard(){

  function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
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
  
  // Generate card id
  let cardNum = getRandomNumber(1, cards.length+1);
  
  const selectedCard = selectCard(cards, cardNum);
  
  createQuizBox(selectedCard);

}

btn.addEventListener('click',() => {
  if(oldCard){
    oldCard.remove();
  }
  DrawCard();
  oldCard = document.querySelector('.card');
});











