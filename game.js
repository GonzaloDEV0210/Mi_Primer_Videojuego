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

    let arrayMaps = maps[2].trim().split("\n");
    let arrayMapsNew = arrayMaps.map(row => row.trim().split(""));

    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            ctx.fillText(emojis[arrayMapsNew[j-1][i-1]], elemetsSize * i+9, elemetsSize * j);
        };
    };
};

const up = document.querySelector("#up");
const left = document.querySelector("#left");
const rigth = document.querySelector("#rigth");
const down = document.querySelector("#down");

function tecladoFunctional(event) {
    switch (event.key) {
        case 'ArrowUp':
            console.log('arriba');
            break;
        case 'ArrowDown':
            console.log('abajo');
            break;
        case 'ArrowLeft':
            console.log('izquierda');
            break;
        case 'ArrowRight':
            console.log('derecha');
            break;
        default:
            alert('Solo se juegan con flechas');
            break;
    }
};

window.addEventListener('keydown', tecladoFunctional);
up.addEventListener('click', ()=>{
    console.log('arriba');
});
left.addEventListener('click', ()=>{
    console.log('izquierda');
});
rigth.addEventListener('click', ()=>{
    console.log("derecha");
});
down.addEventListener("click", ()=>{
    console.log('abajo');
});