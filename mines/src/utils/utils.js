export function genBoard(x, y) {

    const board = [];
    for (let i = 1; i <= x * y; i++) {
        board.push({ text: "💣", class: "" });
    }
    return board
}



export function genBombs(boardLength) {
    const bombs = [];
    const numOfBombs = Math.floor(boardLength * 0.13)
    for (let i = 1; i <= Math.floor(boardLength * 0.13); i++) {
        do {
            board.push(randomInt(0, boardLength));
        } while (bombs.leangth < numOfBombs);
    }
    return board
}





export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

