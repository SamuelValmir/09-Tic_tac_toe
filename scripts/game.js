// MODEL

// Starts variables

let screen = "menu";

let board = ['', '', '', '', '', '', '', '', ''];
let playerTurn = 0;
let symbols = ['x', 'o'];
let playersCode = ["<div class='o'></div>", "<div class='player-x'><div class='x1 x'></div><div class='x2 x'></div></div>"]
let winner;

let winningSequences = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let winningSequence;
let gameOver = false;

let showGame = () => {

}

let canFillIn = (position) => {
    if (board[position] == '') {
        return true;
    }

    return false;
}

let fillIn = (position) => {
    board[position] = symbols[playerTurn];

    if (playerTurn == 0) {
        playerTurn = 1;
    } else {
        playerTurn = 0;
    }
    itWon();
    console.log(board);
}

let itWon = () => {
    for (let i = 0; i < winningSequences.length; i++) {
        let pos1 = winningSequences[i][0];
        let pos2 = winningSequences[i][1];
        let pos3 = winningSequences[i][2];

        if (board[pos1] == board[pos2] && board[pos2] == board[pos3] && board[pos3] != '') {
            gameOver = true;
            winningSequence = winningSequences[i];
        }
    }
}
