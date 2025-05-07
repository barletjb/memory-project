const imageContainer = document.getElementById('imageContainer')
const choice = document.getElementById('choiceMemory')
let choiceMemory, imagePath, maxNumberImg, imageFormat;


//  Creat Fonction : Print img with choice

choice.addEventListener('change', function () {
    choiceMemory = choice.value;


    imageContainer.innerHTML = '';

    switch (choiceMemory) {
        case 'Animaux':
            imageContainer.innerHTML = '<img src="images/animaux.png">'
            imagePath ="separateAnimals";
            maxNumberImg = 27;
            imageFormat = ".webp"


            break;
        case 'Animaux animés':
            imageContainer.innerHTML = '<img src="images/animaux_animes.png">'
            imagePath = "separateAnime"
            maxNumberImg = 8;
            imageFormat = ".webp"

            break;
        case 'Chiens':
            imageContainer.innerHTML = '<img src="images/details_chiens.png">'
            imagePath = "separateDogs";
            maxNumberImg = 23;
            imageFormat = ".webp";

            break;
        case 'Dinosaures':
            imageContainer.innerHTML = '<img src="images/detail_dinosaures.png">'
            imagePath = "separateDinos"
            maxNumberImg = 10;
            imageFormat = ".jpg"

            break;
        default:
            break;
    }

})