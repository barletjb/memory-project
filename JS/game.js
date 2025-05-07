const allCards = document.querySelectorAll(".singleCard");
    console.log(allCards);

    allCards.forEach(card => {
    
            card.addEventListener('click', () => {
            console.log("bonjour");
            console.log(cardSelect);
            let cardSelect = card.currentTarget;

        })

});
