const canvas_game = document.querySelector("#game");
const ctx = canvas_game.getContext("2d");

window.addEventListener('load', startGame);
window.addEventListener('resize', startGame);

function startGame() {
    const size = Math.min(window.innerWidth * 0.8, window.innerHeight * 0.8);
    canvas_game.height = size;
    canvas_game.width = size;

    let elemetsSize = size / 10;

    ctx.font = elemetsSize + "px arial";
    ctx.textAlign = 'end';

    for (let i = 1; i <= 10; i++) {
        ctx.fillText(emojis['X'], elemetsSize * i, elemetsSize);
    }
};