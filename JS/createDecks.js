const boardDeck = document.querySelector(".boardDeck")
const choiceDifficult = document.getElementById('choiceDifficulty')
let choiceD;
let cardCount;

choiceDifficult.addEventListener('change', function createDeck() {
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

    const tabDesk = [];
    for (let index = 0; index < cardCount / 2; index++) {
        let randomNumber = Math.floor(Math.random() * (maxNumberImg - 1) + 1)
        tabDesk.push(`<img src="./images/${imagePath}/${randomNumber}${imageFormat}">`);
        tabDesk.push(`<img src="./images/${imagePath}/${randomNumber}${imageFormat}">`);

    }
  
    const cardDeck = document.createElement('div');
    cardDeck.classList.add('cardDeck')
    boardDeck.appendChild(cardDeck);

    for (let index = 0; index < cardCount; index++) {
        const singleCard = document.createElement('div')
        singleCard.classList.add('singleCard')

        const notVisible = document.createElement('div');
        notVisible.classList.add('notVisible');

        const visible = document.createElement('div');
        visible.classList.add('visible');


        singleCard.appendChild(notVisible);
        singleCard.appendChild(visible);
        cardDeck.appendChild(singleCard);
        console.log(visible);
        

    }


    const tabDoubleCard = document.querySelectorAll(".visible")
    console.log(tabDoubleCard, tabDesk);
    let index = 0;
    tabDoubleCard.forEach(card => {
       card.innerHTML = tabDesk[index];
       index++;
    });

})



