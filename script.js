const O_CLASS = 'o'
const X_CLASS = 'x'
const WINNING_COMBO = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellElement = document.querySelectorAll('[data-cells]');
const board = document.getElementById("board");
const winningMsg = document.getElementById("winningMsg");
const WinnerMsgText = document.querySelectorAll('[data_winner_msg_text]')
let oTurn

startGame()

function startGame(){
    oTurn = false
    cellElement.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true});
    });
    setHoverClass()
}

function handleClick(e) {
    const cell = e.target
    const currentClass = oTurn ? O_CLASS : X_CLASS
    placeMark(cell, currentClass)
    if(checkWin(currentClass)){
        endGame(false)
    }
    // placeMark
    // check for win
    // check for draw
    // switch turns
    swapTurns()
    setHoverClass()
}

function endGame(draw){
    if(draw){

    }else{
        WinnerMsgText.innerHTML = `${oTurn ? "O's" : "X's"} Wins!`
    }
    winningMsg.classList.add('show')
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns(){
    oTurn = !oTurn
}

function setHoverClass(){
    board.classList.remove(X_CLASS)
    board.classList.remove(O_CLASS)
    if(oTurn){
        board.classList.add(O_CLASS)
    }else{
        board.classList.add(X_CLASS)
    }
}

function checkWin(currentClass){
   return WINNING_COMBO.some(combination => {
    return combination.every(index => {
        return cellElement[index].classList.contains(currentClass)
    })
    })
}