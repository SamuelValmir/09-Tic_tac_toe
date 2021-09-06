"use strict";

// document.addEventListener("DOMContentLoaded", () => {
//     var players = document.querySelectorAll(".player");
//     players.forEach((player) =>{
//         player.addEventListener("click", setPlayer);
//     })
//     let playerX = players[0];
//     let playerO = players[1];
// })
let playerX = document.getElementsByClassName("player")[0];
let playerO = document.getElementsByClassName("player")[1];

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

let playGame = () => {
    if (verifyFields()) {
        let chosenPlayer;
        if (playerX.getAttribute("selected") === "true") {
            chosenPlayer = "x";
        } else if (playerO.getAttribute("selected") === "true") {
            chosenPlayer = "o";

        }
        window.location.href = "../html/game.html?chosenPlayer=" + chosenPlayer;
    } else {
        alert("You need to choose a player!");
    }
}

let verifyFields = () => {
    if (playerX.getAttribute("selected") === "true" || playerO.getAttribute("selected") === "true") {
        return true
    }
    return false;
}