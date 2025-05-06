const imageContainer = document.getElementById('imageContainer')
const choice = document.getElementById('choiceMemory')
let choiceMemory;

choice.addEventListener('change', function () {
    choiceMemory = choice.value;

    imageContainer.innerHTML = '';

    switch (choiceMemory) {
        case 'Animaux':
            imageContainer.innerHTML = '<img src="images/animaux.png">'

            break;
        case 'Animaux animés':
            imageContainer.innerHTML = '<img src="images/animaux_animes.png">'

            break;
        case 'Chiens':
            imageContainer.innerHTML = '<img src="images/details_chiens.png">'

            break;
        case 'Dinosaures':
            imageContainer.innerHTML = '<img src="images/detail_dinosaures.png">'

            break;
        default:
            break;
    }

})