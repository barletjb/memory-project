import { createDifficult } from "./createDifficult.js";
import { createBoardDeck } from "./createBoardDeck.js";
import { createRandomDeck } from "./createRandomDeck.js";
import { choiceMemory } from "./choiceMemory.js";
import { allCards } from "./gaming.js";

// Creat object null

let gameSettings = {
    cardCount: null,
    imagePath: null,
    maxNumberImg: null,
    imageFormat: null
};

createDifficult(gameSettings);
choiceMemory(gameSettings);


const startGame = document.getElementById('startGame');

startGame.addEventListener('click', () => {
        if (!gameSettings.cardCount || !gameSettings.imagePath) {
            alert("Merci de choisir la difficulté et le thème avant de lancer la partie !");
            return;
        }
    createBoardDeck(gameSettings.cardCount);
    createRandomDeck(gameSettings);
    allCards();


});