// Creat LVL Difficult:


export function createDifficult(gameSettings) {
    
    const choiceDifficult = document.getElementById('choiceDifficulty')
    let cardCount;
    choiceDifficult.addEventListener('change', function () {
        let choiceD = choiceDifficult.value;


        switch (choiceD) {
            case 'Facile':
                gameSettings.cardCount = 8;
                console.log(gameSettings);

                break;
            case 'Moyen':
                gameSettings.cardCount = 12;

                break;
            case 'Difficile':
                gameSettings.cardCount = 20;
                break;
            case 'Abominable':
                gameSettings.cardCount = 24;
                break;
            default:
                return;
        }

    })

}


