// Creat tabDesk with random number with choiceMemory (variable imagePath, maxNumberImg, imageFormat):

export function createRandomDeck({ cardCount, imagePath, maxNumberImg, imageFormat }) {

    const tabDesk = [];
    const usedNumbers = [];
    for (let index = 0; index < cardCount / 2; index++) {
        let randomNumber = Math.floor(Math.random() * (maxNumberImg - 1) + 1);
        const cardHtml = `<img src="./images/${imagePath}/${randomNumber}${imageFormat}">`;
        tabDesk.push(cardHtml)
        tabDesk.push(cardHtml)
        
    }

    // const tabDesk = [];
    // const usedNumbers = [];

    // while (usedNumbers.length < cardCount / 2) {
    //     let randomNumber = Math.floor(Math.random() * (maxNumberImg - 1) + 1);

    //     if (!usedNumbers.includes(randomNumber)) {
    //         usedNumbers.push(randomNumber);

    //         const cardHtml = `<img src="./images/${imagePath}/${randomNumber}${imageFormat}">`;
    //         tabDesk.push(cardHtml);
    //         tabDesk.push(cardHtml);
    //     }
    // }

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