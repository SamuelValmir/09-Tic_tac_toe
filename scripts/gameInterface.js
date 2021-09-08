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

    // Get the player turn
    playerTurn = symbols.indexOf(chosenPlayer);
    updateTurnSpan();

    // Add event listener for each clickable place (square)
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('click', click);
    })

})

// When player click in square
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
    // How has content inside square, the follow code is for execute a action only if the square is clicked
    if (square.className == "square") {

        if (!hasWinner) {
            //* I can access methods from other JS script because this other script was defined firstly than this one.
            if (canFillIn(position)) {
                fillIn(position);
                updateSquare(square);
                updateTurnSpan(position);
            }
        }
    }
}

// Insert a value in html for to draw the player on screen
let updateSquare = (square) => {
    square.innerHTML += playersCode[playerTurn];
}

// Update the text at the top of the screen that shows the player's turn
let updateTurnSpan = (position) => {

    if (!hasWinner) {
        turnSpan.innerHTML = "Turn: " + symbols[playerTurn];

        if (draw) {
            turnSpan.innerHTML = "Draw";
            fadeScreen();
        }

    } else if (hasWinner) {
        turnSpan.innerHTML = "Winner: " + board[position];
        animateWinningSequence();
    }
}

let fadeScreen = () => {
    document.body.classList.add("fade");
}

// Put a horizontal, vertical or diagonal line 
let animateWinningSequence = () => {
    // Making function to check if tow lists are equal
    function isEqualTo(array) {
        for (const pos in array) {
            if (this[pos] !== array[pos]) {
                return false;
            }
        }
        return true;
    }
    winningSequence.isEqualTo = isEqualTo;

    let win = document.getElementById(winningSequence[1]);

    // Choose a color for line
    let colorClass;
    if (playerTurn == 0) {
        colorClass = "white";
    } else if (playerTurn == 1) {
        colorClass = "black";
    }

    // Choose a square to insert the line
    if (winningSequence.isEqualTo([0, 1, 2]) || winningSequence.isEqualTo([3, 4, 5]) || winningSequence.isEqualTo([6, 7, 8])) {
        win.innerHTML += "<div class='winner-horizontal-line " + colorClass + "'></div>";
    } else if (winningSequence.isEqualTo([0, 3, 6]) || winningSequence.isEqualTo([1, 4, 7]) || winningSequence.isEqualTo([2, 5, 8])) {
        win.innerHTML += "<div class='winner-vertical-line " + colorClass + "'></div>";
    } else if (winningSequence.isEqualTo([0, 4, 8])) {
        win.innerHTML += "<div class='winner-diagonal-line " + colorClass + "'></div>";
    } else if (winningSequence.isEqualTo([2, 4, 6])) {
        win.innerHTML += "<div class='winner-diagonal-line " + colorClass + "'></div>";
        document.querySelector(".winner-diagonal-line").style.transform = ("translate(-50%, -50%) rotate(45deg)")
    }

}