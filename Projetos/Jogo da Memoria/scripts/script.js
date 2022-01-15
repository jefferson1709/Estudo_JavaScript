const FRONT = "card_front"
const BACK = "card_back"

let techs = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'
];
let cards = null;

startGame();
function startGame(){
    cards = createCardsFromTechs(techs);
    shurffleCards(cards);
    initiallizeCards(cards);
}

function initializeCards(cards){
    let gameBoard = document.getElementById("gameBoard");

    cards.forEach(card => {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard)
        gameBoard.appendChild(cardElement);
    })
}

function createCardContent(card, cardElements){
    createCardFace(FRONT, card, cardElements);
    createCardFace(BACK, card, cardElements);
}

function createCardFace(face, card, element){
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if(face === FRONT){
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = "./assets/imagens/"+card.icon+".png";
        cardElementFace.appendChild(iconElement);
    }else{
        cardElementFace.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace);
}

function shurrleCards(cards){
    let currentIndex = cards.length;
    let randomIndex=0;

    while(currentIndex !==0){
        radomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex--;
        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex]]
    }
}




function createCardsFromTechs(techs){
    let cards = [];
    for(let tech of techs){
        cards.push(createPairFromTech(tech));
    }
    return cards.flatMap( pair => pair);
}

function createPairFromTech(tech){
    return[{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    },{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    }]

}