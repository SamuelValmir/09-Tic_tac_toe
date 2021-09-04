// Executed when document is loaded

document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('click', click);
    })
})

let click = (event) => {
    console.log(event.target.class)
    if (true){
        // I can access methods from other JS script because this other script was defined firstly then this one.
        move(event.target.id);
        updateSquare(event);
    }
}

let updateSquare = (event) => {

    console.log(playerTurn)
    event.target.innerHTML += playersCode[playerTurn];

}

