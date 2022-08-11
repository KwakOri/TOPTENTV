let cards = [
  {
    body: '길을 걷고 있는데 앞에 떨어져 있던 물건을 주웠습니다. 어떤 물건일까요?',
    min: '아주 가벼운 물건부터',
    max: '엄청 무거운 물건까지',
  },
  {
    body: '실수로 1,000개나 주문한 물건이 벌써 배송되어 문 앞에 도착했습니다. 당신은 무엇을 샀을까요?',
    min: '아주 난감한 물건부터',
    max: '나름대로 유용한 물건까지',
  },
  {
    body: '집 창문 밖에서 어떤 소리가 들립니다. 어떤 소리일까요?',
    min: '당장 그만 듣고 싶은 소리부터',
    max: '계속해서 듣고 싶은 소리까지',
  },
  {
    body: '드라마에 나오는 누군가의 인생을 살아볼 기회가 생겼습니다. 누구의 인생을 살고 싶나요?',
    min: '끔찍한 악몽 같은 인생부터',
    max: '환상적인 꿈 같은 인생까지',
  },
  {
    body: '술을 잔뜩 마시고 직장 상사에게 전화를 건 당신, 무슨 말을 했을까요?',
    min: '별일 없이 넘어갈 말부터',
    max: '엄청난 후폭풍을 불러 일으킬 말까지',
  },
  {
    body: '김밥을 만들고 있는 당신, 속 재료로 무엇을 넣었나요?',
    min: '도저히 먹을 수 없을 것 같은 재료부터',
    max: '최고의 재료까지',
  },
  {
    body: '당신은 무인도에 떨어졌습니다. 무인도에서 살아남기 위해 물건 하나를 고를 수 있습니다. 어떤 물건을 골랐을까요?',
    min: '가장 쓸모 없는 물건부터',
    max: '엄청 유용한 물건까지',
  },
  {
    body: '당신의 집에 강도가 들었습니다. 당신은 강도에게 대항하기 위해 주변에 있던 물건을 주워들었습니다. 어떤 물건일까요?',
    min: '전혀 도움이 안될 것 같은 물건부터',
    max: '엄청 유용한 물건까지',
  },
  {
    body: '당신은 트럭에 치여 이세카이에 가게 되었습니다. 여신께서 당신에게 능력 하나를 선택하게 해주었습니다. 어떤 능력을 선택했나요?',
    min: '진짜 쓸모 없는 능력부터',
    max: '엄청 쓸모 있는 능력까지',
  },
  {
    body: '대학교 조별과제의 팀장인 당신, 카톡방을 만들자 조원 한 명이 카톡을 보냅니다. 카톡의 내용은 무엇인가요?',
    min: '가장 보기 싫은 카톡부터',
    max: '가장 받고 싶은 카톡까지',
  },
  {
    body: '<동작퀴즈> 사막에서 오아시스를 발견했습니다. 오아시스에서 물을 마시는 순간을 표현해주세요.',
    min: '별로 목이 마르지 않은 듯한 모습부터',
    max: '며칠 동안 물 한 방울 못 마신듯한 모습까지',
  },
  {
    body: '<동작퀴즈> 당신은 김밥천국에서 라면을 주문했습니다. 라면을 먹는 모습을 표현해주세요.',
    min: '소심한 소식좌부터',
    max: '푸드파이터까지',
  },
  {
    body: '당신의 방에 벽에는 상장이 걸려있습니다. 어떤 상장인가요?',
    min: '남에게 보여주기 부끄러운 상장부터',
    max: '너무나 자랑하고 싶은 상장까지',
  },
  {
    body: '헬기에서 뛰어내린 당신, 그런데 낙하산이 펴지지 않아서 가방에서 물건을 꺼냅니다. 어떤 물건인가요?',
    min: '정말 쓸모없는 물건부터',
    max: '나름 유용한 물건까지',
  },
  {
    body: '잠에서 깬 당신은 집이 아닌 미지의 낯선 곳에서 깨어납니다. 이곳은 어디인가요?',
    min: '끔찍하게 싫은 장소부터',
    max: '황홀감을 느끼는 장소까지',
  },
  {
    body: '<동작퀴즈> 당신은 길거리를 걷다가 연예인을 만났습니다. 연예인을 만난 모습을 표현해주세요!',
    min: '누군지 전혀 모르겠는 연예인부터',
    max: '모를 수가 없는 슈퍼스타까지',
  },
  {
    body: '<동작퀴즈> 당신은 과제를 하다 저장하는 걸 까먹고 실수로 과제를 전부 날려버렸다는 것을 깨달았습니다. 깨달은 순간의 모습을 표현해주세요!',
    min: '과제가 뭐에요? 1학년 새내기부터',
    max: '과제에 닳고 닳은 4학년 졸업반까지',
  },
]

let index = [];
for (let i=0; i<cards.length;i++){
  index.push(i);
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
  console.log("cardIdx:", cardIdx, 'index:', index);
  
  return cardIdx;
}

function drawCard(){
  const cardIdx = checkNum();
  const selectCard = cards[cardIdx];
  console.log(selectCard);
  createQuizBox(selectedCard);
}

function checkRestCards(){
  if(index.length < 0){
    drawCard();
  } else {
    let index = [];
    for (let i=0; i<cards.length;i++){
      index.push(i);
    }
    alert("카드를 모두 사용하셨습니다!");
  }
}