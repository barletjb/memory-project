const boardDeck = document.querySelector(".boardDeck")
const choiceDifficult = document.getElementById('choiceDifficulty')
let choiceD;
let cardCount;

// Creat LVL Difficult:

choiceDifficult.addEventListener('change', function () {
    choiceD = choiceDifficult.value;

    boardDeck.innerHTML = '';

    switch (choiceD) {
        case 'Facile':
            cardCount = 8;
            break;
        case 'Moyen':
            cardCount = 12;

            break;
        case 'Difficile':
            cardCount = 20;
            break;
        case 'Abominable':
            cardCount = 24;
            break;
        default:
            return;
    }
    creatBoardDeck(cardCount)
    createRandomDeck(choiceMemory)

})



function createRandomDeck(params) {

    // Creat tabDesk with random number with choiceMemory (variable imagePath, maxNumberImg, imageFormat):
    const tabDesk = [];
    for (let index = 0; index < cardCount / 2; index++) {
        let randomNumber = Math.floor(Math.random() * (maxNumberImg - 1) + 1)
        tabDesk.push(`<img src="./images/${imagePath}/${randomNumber}${imageFormat}">`);
        tabDesk.push(`<img src="./images/${imagePath}/${randomNumber}${imageFormat}">`);
    }

    // Shuffle tadDesk
    tabDesk.sort(() => Math.random() - 0.5);

    // Import TabDesk in <div> "visible"
    const tabDoubleCard = document.querySelectorAll(".visible")
    let index = 0;
    tabDoubleCard.forEach(card => {
        card.innerHTML = tabDesk[index];
        index++;
    })
}

function creatBoardDeck(params) {

    const cardDeck = document.createElement('div');
    cardDeck.classList.add('cardDeck')
    boardDeck.appendChild(cardDeck);

    // Creat <div> with choiceDifficult(cardCount)

    for (let index = 0; index < params; index++) {

        const singleCard = document.createElement('div')
        singleCard.classList.add('singleCard')
        
        const visible = document.createElement('div');
        visible.classList.add('visible');

        cardDeck.appendChild(singleCard);
        singleCard.appendChild(visible);
    
    }
}
