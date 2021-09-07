// CONTROLLER

let turnSpan = document.querySelector(".turn");

// Executed when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get url received
    let urlString = window.location.href;
    let url = new URL(urlString);
    let chosenPlayer = url.searchParams.get("chosenPlayer");

    playerTurn = symbols.indexOf(chosenPlayer);
    updateTurnSpan();

    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('click', click);
    })
})


let click = (event) => {
    let square = event.target;
    let position = square.id;
    if (square.className == "square") {

        if (!hasWinner) {
            // I can access methods from other JS script because this other script was defined firstly then this one.
            if (canFillIn(position)) {
                fillIn(position);
                updateSquare(square);
                updateTurnSpan(position);
            }
        }
    }
}

let updateSquare = (square) => {
    square.innerHTML += playersCode[playerTurn];
}

let updateTurnSpan = (position) => {
    let boardDiv = document.querySelector(".board");

    if (!hasWinner) {
        turnSpan.innerHTML = "Turn: " + symbols[playerTurn];
    } else if(hasWinner){
        turnSpan.innerHTML = "Winner: " + board[position];
        boardDiv.innerHTML += ""
    }
    
    if (draw){ 
        turnSpan.innerHTML = "Draw";
    }

}