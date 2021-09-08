"use strict";

let playerX = document.getElementsByClassName("player")[0];
let playerO = document.getElementsByClassName("player")[1];
let modal = document.querySelector(".modal");
let modalCloseButton = document.querySelector(".close");

let setPlayerX = () => {
    playerO.setAttribute("selected", false);
    playerX.setAttribute("selected", true);
    decoratePlayerOption(playerX, playerO);
}

let setPlayerO = () => {
    playerX.setAttribute("selected", false);
    playerO.setAttribute("selected", true);
    decoratePlayerOption(playerO, playerX);
}

let decoratePlayerOption = (playerOption1, playerOption2) => {
    playerOption1.classList.add("playerClicked");
    playerOption2.classList.remove("playerClicked");
}

// Go to another page where game is on it.
let playGame = () => {
    if (verifyFields()) {
        let chosenPlayer;
        if (playerX.getAttribute("selected") === "true") {
            chosenPlayer = "x";
        } else if (playerO.getAttribute("selected") === "true") {
            chosenPlayer = "o";
        }
        window.location.href = "./html/game.html?chosenPlayer=" + chosenPlayer;
    } else {
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal.
modalCloseButton.onclick = () => {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it.
window.onclick = (event) => {
    if (event.target === modal){
        modal.style.display = "none";
    }
}

let verifyFields = () => {
    if (playerX.getAttribute("selected") === "true" || playerO.getAttribute("selected") === "true") {
        return true
    }
    return false;
}