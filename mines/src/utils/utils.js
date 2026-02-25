export function genBoard(x, y) {

    const board = [];
    for (let i = 1; i <= x * y; i++) {
        board.push({ text: "💣", class: "" });
    }
    return board
}

export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}