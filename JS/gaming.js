let count = 0;
let selectedCards = [];

export function allCards() {

    const allCards = document.querySelectorAll(".singleCard");

    allCards.forEach(card => {
        card.addEventListener('click', () => {

            // Empeche select + de deux cartes et la meme carte select
            if (card.classList.contains('selected') || count >= 2) return;

            // Afficher l'image de la carte
            const visibleDiv = card.querySelector('.visible');
            visibleDiv.style.visibility = 'visible';

            // ajouter une bordure autour de la carte
            card.classList.add('selected');
            card.style.border = "2px solid #007bff";

            selectedCards.push(card);
            count++;

            // Si 2 cartes select, comapraison
            if (count === 2) {
                const [card1, card2] = selectedCards;

                //Si cartes identiques
                if (card1.innerHTML === card2.innerHTML) {
                    selectedCards = [];
                    count = 0;
                } else { 
                    // sinon reinitialisation
                    setTimeout(() => {
                        card1.classList.remove('selected');
                        card2.classList.remove('selected');
                        card1.style.border = "";
                        card2.style.border = "";

                        card1.querySelector('.visible').style.visibility = 'hidden';
                        card2.querySelector('.visible').style.visibility = 'hidden';

                        selectedCards = []; 
                        count = 0; 
                    }, 1000); 
                }
            }
        });
    });
}