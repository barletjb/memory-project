let count = 0;
let selectedCards = [];
let fullSelected = [];


export function allCards() {

    const allCards = document.querySelectorAll(".singleCard");

    allCards.forEach(card => {
        card.addEventListener('click', () => {

            // Empeche select + de deux cartes et la meme carte select
            if (card.classList.contains('selected') || count >= 2) return;

            // Afficher l'image de la carte
            const visibleDiv = card.querySelector('.visible');
            visibleDiv.style.visibility = 'visible';
            const imageVisible = visibleDiv.querySelector("img");
            imageVisible.style.visibility ='visible';
            
            // ajouter une bordure autour de la carte
            card.classList.add('selected');
            card.style.border = "2px solid #007bff";
            card.style.transform = "translateX(-100%) rotateY(-180deg)";

            // ajoute les cartes dans un tab
            selectedCards.push(card);    
            count++;
        
            // Si 2 cartes select, comparaison
            if (count === 2) {
                const [card1, card2] = selectedCards;
            
                //Si cartes identiques
                if (card1.innerHTML === card2.innerHTML) {
                    
                    fullSelected.push(card1)
                    fullSelected.push(card2)
                    selectedCards = [];
                    count = 0;
                    
                        if(fullSelected.length == allCards.length){
                            alert("BRAVO ! Partie terminée");
                            return;
                        }

                    
                } else { 
                    // sinon reinitialisation
                    setTimeout(() => {
                        card1.classList.remove('selected');
                        card2.classList.remove('selected');
                        card1.style.border = "";
                        card2.style.border = "";
                        card1.style.transform = "";
                        card2.style.transform = ""; 


                        card1.querySelector('.visible').style.visibility = 'hidden';
                        card2.querySelector('.visible').style.visibility = 'hidden';
                        card1.querySelector('img').style.visibility = 'hidden';
                        card2.querySelector('img').style.visibility = 'hidden';

                        selectedCards = []; 
                        count = 0; 
                    }, 2000); 
                }
            }
        });
    });
}