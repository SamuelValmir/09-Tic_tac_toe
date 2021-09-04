// Starts variables

let board = ['', '', '', '', '', '', '', '', ''];
let playerTurn = 0;
let symbols = ['x', '0'];
let playersCode = [ "<div class='o'></div>", "<div class='player-x'><div class='x1 x'></div><div class='x2 x'></div></div>"]
let winner;

let move = (position) => {
    board[position] = symbols[playerTurn];

    if (playerTurn == 0) {
        playerTurn = 1;
    } else {
        playerTurn = 0;
    }
    console.log(board);
}