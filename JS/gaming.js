export function allCards() {

    const allCards = document.querySelectorAll(".singleCard");
    
    allCards.forEach(card => {

        card.addEventListener('click', () => {
            let cardSelect = card.currentTarget;
            console.log('bonjour');
            


        })

    });

}
