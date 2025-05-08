// Choice Memory

export function choiceMemory(gameSettings) {

    const imageContainer = document.getElementById('imageContainer')
    const choice = document.getElementById('choiceMemory')
    let choiceMemory, imagePath, maxNumberImg, imageFormat;


    choice.addEventListener('change', function () {
        choiceMemory = choice.value;


        imageContainer.innerHTML = '';

        switch (choiceMemory) {
            case 'Animaux':
                imageContainer.innerHTML = '<img src="images/animaux.png">'
                gameSettings.imagePath = "separateAnimals";
                gameSettings.maxNumberImg = 27;
                gameSettings.imageFormat = ".webp"
                console.log(gameSettings);


                break;
            case 'Animaux animés':
                imageContainer.innerHTML = '<img src="images/animaux_animes.png">'
                gameSettings.imagePath = "separateAnime"
                gameSettings.maxNumberImg = 8;
                gameSettings.imageFormat = ".webp"

                break;
            case 'Chiens':
                imageContainer.innerHTML = '<img src="images/details_chiens.png">'
                gameSettings.imagePath = "separateDogs";
                gameSettings.maxNumberImg = 23;
                gameSettings.imageFormat = ".webp";

                break;
            case 'Dinosaures':
                imageContainer.innerHTML = '<img src="images/detail_dinosaures.png">'
                gameSettings.imagePath = "separateDinos"
                gameSettings.maxNumberImg = 10;
                gameSettings.imageFormat = ".jpg"

                break;
            default:
                break;
        }

    })

    return gameSettings;

}