// Starts variables

let board = ['', '', '', '', '', '', '', '', ''];
let playerTurn = 0;
let symbols = ['x', '0'];
let playersCode = ["<div class='o'></div>", "<div class='player-x'><div class='x1 x'></div><div class='x2 x'></div></div>"]
let winner;

let gameOver = false;

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
    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [7, 5, 3],
        [9, 5, 1]
    ]

    winStates.forEach((winState) => {
        let pos1 = winState[0];
        let pos2 = winState[1];
        let pos3 = winState[2];
        if (board[pos1] == board[pos2] && board[pos2] == board[pos3] && board[pos3] != '') {
            gameOver = true;
        }
    })
}