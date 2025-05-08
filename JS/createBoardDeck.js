// Creat BoardDeck

export function createBoardDeck(param) {

    const boardDeck = document.querySelector(".boardDeck")
    const cardDeck = document.createElement('div');
    cardDeck.classList.add('cardDeck')
    boardDeck.appendChild(cardDeck);

    // Creat <div> with choiceDifficult(cardCount)

    for (let index = 0; index < param; index++) {

        const singleCard = document.createElement('div')
        singleCard.classList.add('singleCard')

        const visible = document.createElement('div');
        visible.classList.add('visible');

        cardDeck.appendChild(singleCard);
        singleCard.appendChild(visible);

    }
}
