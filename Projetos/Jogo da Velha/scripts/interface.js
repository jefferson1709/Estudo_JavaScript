document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event){

    let square = event.target;
    let position = square.id;

    handleMove(postion);
    updateSquares();
}

function updateSquares(){
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[postion];

        if(Symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}