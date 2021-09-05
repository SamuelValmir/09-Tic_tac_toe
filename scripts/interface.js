// Executed when document is loaded

document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('click', click);
    })
})

let click = (event) => {
    let square = event.target;
    let position = square.id;
    if (square.className == "square") {
        if (!gameOver) {
            // I can access methods from other JS script because this other script was defined firstly then this one.
            if (canFillIn(position)) {
                fillIn(position);
                updateSquare(square);
            }
        }
    }
}

let updateSquare = (square) => {
    square.innerHTML += playersCode[playerTurn];

}

