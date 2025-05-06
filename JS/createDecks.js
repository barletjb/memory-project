const tabDinos = [
    `<img src="image/separateDinos/1.jpg">`,
    `<img src="image/separateDinos/2.jpg">`,
    `<img src="image/separateDinos/3.jpg">`,
    `<img src="image/separateDinos/4.jpg">`,
    `<img src="image/separateDinos/5.jpg">`,
    `<img src="image/separateDinos/6.jpg">`,
    `<img src="image/separateDinos/7.jpg">`,
    `<img src="image/separateDinos/8.jpg">`,
    `<img src="image/separateDinos/9.jpg">`,
    `<img src="image/separateDinos/10.jpg">`
];

const tabAnimals = [
    `<img src="image/separateAnimals/2.webp">`,
    `<img src="image/separateAnimals/3.webp">`,
    `<img src="image/separateAnimals/4.webp">`,
    `<img src="image/separateAnimals/5.webp">`,
    `<img src="image/separateAnimals/6.webp">`,
    `<img src="image/separateAnimals/7.webp">`,
    `<img src="image/separateAnimals/8.webp">`,
    `<img src="image/separateAnimals/9.webp">`,
    `<img src="image/separateAnimals/10.webp">`,
    `<img src="image/separateAnimals/11.webp">`,
    `<img src="image/separateAnimals/1.webp">`,
    `<img src="image/separateAnimals/12.webp">`,
    `<img src="image/separateAnimals/13.webp">`,
    `<img src="image/separateAnimals/14.webp">`,
    `<img src="image/separateAnimals/15.webp">`,
    `<img src="image/separateAnimals/16.webp">`,
    `<img src="image/separateAnimals/17.webp">`,
    `<img src="image/separateAnimals/18.webp">`,
    `<img src="image/separateAnimals/19.webp">`,
    `<img src="image/separateAnimals/20.webp">`,
    `<img src="image/separateAnimals/21.webp">`,
    `<img src="image/separateAnimals/22.webp">`,
    `<img src="image/separateAnimals/23.webp">`,
    `<img src="image/separateAnimals/24.webp">`,
    `<img src="image/separateAnimals/25.webp">`,
    `<img src="image/separateAnimals/26.webp">`,
    `<img src="image/separateAnimals/27.webp">`,
    `<img src="image/separateAnimals/28.webp">`
];

const tabAnime = [
    `<img src="image/separateAnime/1.webp">`,
    `<img src="image/separateAnime/2.webp">`,
    `<img src="image/separateAnime/3.webp">`,
    `<img src="image/separateAnime/4.webp">`,
    `<img src="image/separateAnime/5.webp">`,
    `<img src="image/separateAnime/6.webp">`,
    `<img src="image/separateAnime/7.webp">`,
    `<img src="image/separateAnime/8.webp">`
];

const tabDogs = [
    `<img src="image/separateDogs/2.webp">`,
    `<img src="image/separateDogs/3.webp">`,
    `<img src="image/separateDogs/4.webp">`,
    `<img src="image/separateDogs/5.webp">`,
    `<img src="image/separateDogs/6.webp">`,
    `<img src="image/separateDogs/7.webp">`,
    `<img src="image/separateDogs/8.webp">`,
    `<img src="image/separateDogs/9.webp">`,
    `<img src="image/separateDogs/10.webp">`,
    `<img src="image/separateDogs/11.webp">`,
    `<img src="image/separateDogs/1.webp">`,
    `<img src="image/separateDogs/12.webp">`,
    `<img src="image/separateDogs/13.webp">`,
    `<img src="image/separateDogs/14.webp">`,
    `<img src="image/separateDogs/15.webp">`,
    `<img src="image/separateDogs/16.webp">`,
    `<img src="image/separateDogs/17.webp">`,
    `<img src="image/separateDogs/18.webp">`,
    `<img src="image/separateDogs/19.webp">`,
    `<img src="image/separateDogs/20.webp">`,
    `<img src="image/separateDogs/21.webp">`,
    `<img src="image/separateDogs/22.webp">`,
    `<img src="image/separateDogs/23.webp">`,
];


const board = document.querySelector(".boardDeck")
const choiceDifficult = document.getElementById('choiceDifficulty')
let choiceD;
let cardCount;

choiceDifficult.addEventListener('change', function () {
    choiceD = choiceDifficult.value;

    board.innerHTML = '';

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

    const cardDeck = document.createElement('div');
    cardDeck.classList.add('cardDeck')
    board.appendChild(cardDeck);

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
    }

})



const choiceM = document.getElementById('choiceMemory')
let choiceM2;

            
//             break;
//         case "Animaux animés":
//             //
//             break;
//         case "Chiens":
            
//             break;
//         case "Dinosaures":
            
//             break;
//         default:
//             break;
//     }
// }

