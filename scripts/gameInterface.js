// CONTROLLER

let turnSpan = document.querySelector(".turn");
let boardHorizontalLines = document.querySelectorAll(".board-horizontal-line");
let boardVerticalLines = document.querySelectorAll(".board-vertical-line");
let removeAnimation = true;

// Show animation when screen is loaded
function animateBoard() {
    boardHorizontalLines.forEach((boardHorizontalLine) => {
        boardHorizontalLine.classList.add("board-horizontal-line-animation")
    })
    boardVerticalLines.forEach((boardVerticalLine) => {
        boardVerticalLine.classList.add("board-vertical-line-animation")
    })
}

// Executed when document is loaded
document.addEventListener('DOMContentLoaded', () => {

    //  Animate board
    animateBoard()

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
    if (removeAnimation) {
        boardHorizontalLines.forEach((boardHorizontalLine) => {
            boardHorizontalLine.classList.remove("board-horizontal-line-animation")
        })
        boardVerticalLines.forEach((boardVerticalLine) => {
            boardVerticalLine.classList.remove("board-vertical-line-animation")
        })
    }
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

        let win = document.querySelector("#winner_bar_1");
        // win.classList.add("winner-vertical-line");

        let ver = document.querySelector("#winner_bar_Y_1");
        //ver.classList.add("winner-horizontal-line");


    } else if (hasWinner) {
        turnSpan.innerHTML = "Winner: " + board[position];
        boardDiv.innerHTML += ""
    }

    if (draw) {
        turnSpan.innerHTML = "Draw";
    }

}