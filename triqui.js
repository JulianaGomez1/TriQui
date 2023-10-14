
const cuadritosDelTriqui = document.querySelectorAll(".cell");
console.log(cuadritosDelTriqui)
var jugadorActual = "X";
var gameBoard = ["", "", "", "", "", "", "", "", ""];
const ArrayPatronesGanadores = [
        [0, 1, 2],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
function revisaQuienGano(player) {
    for (const patronIndividual of ArrayPatronesGanadores) {
        
        const [a, b, c] = patronIndividual;
        if (gameBoard[a] === player && gameBoard[b] === player && gameBoard[c] === player
        ) {
            console.log("Ganador con esta combinacion");
            console.log(patronIndividual);
            return true;
        }
    }
    return false;
}
function revisaSiHayEmpate() {
    return gameBoard.every((cell) => cell !== "");
}

function funcionQueManejaCadaClick(event) {
    const indiceDelCuadroQueHizoClick = Array.from(cuadritosDelTriqui).indexOf(event.target);

    if (gameBoard[indiceDelCuadroQueHizoClick] === "" && !revisaQuienGano("X") && !revisaQuienGano("O")) {
        gameBoard[indiceDelCuadroQueHizoClick] = jugadorActual;
        event.target.textContent = jugadorActual;

    if (revisaQuienGano(jugadorActual)) {
            
            
    if(jugadorActual=="X"){
        const divDelPuntajeDelJugadorX=document.getElementById('puntajeJugador1');
        const marcadorActual=parseInt(divDelPuntajeDelJugadorX.innerText);
        console.log("====>>> GANO: XXXXX")
        console.log(marcadorActual)
        divDelPuntajeDelJugadorX.innerText=marcadorActual+1;
}

    if(jugadorActual=="O"){
        const divDelPuntajeDelJugador0=document.getElementById('puntajeJugador2');
        const marcadorActual=parseInt(divDelPuntajeDelJugador0.innerText);
        console.log("====>>> GANO: 000000")
        console.log(marcadorActual)
        divDelPuntajeDelJugador0.innerText=marcadorActual+1;
}
    document.getElementById("message").textContent = `${jugadorActual} Ganaste!`;
    muestraBotonIntentarDeNuevo()

    } else if (revisaSiHayEmpate()) {
        document.getElementById("message").textContent = "Empate!";
    } else {
        jugadorActual = jugadorActual === "X" ? "O" : "X";
        }
    }

}
cuadritosDelTriqui.forEach((cell) => {
    console.log(cell)
        cell.addEventListener("click", funcionQueManejaCadaClick);
});

document.addEventListener("DOMContentLoaded", function() {
    
    const color = ["#ff00ff", "#00ffff", "#ff9500", "#0095ff", "green", "#651823"];
    const title = document.getElementById("title");
    const mensaje = document.getElementById("message");

    let actualColor = 0; 

    setInterval(() => {
        title.style.color = color[actualColor];
        mensaje.style.color = color[actualColor];
        actualColor = (actualColor + 1) % color.length;
}
        , 1000);
}
);



function intentarDeNuevo (){
    ocultaBotonIntentarDeNuevo();
    //aqui deberias ocultar el X ganaste!
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    cuadritosDelTriqui.forEach((cell) => {
        
        cell.innerText="";
    });
    document.getElementById('message').innerText="";
}


function ocultaBotonIntentarDeNuevo(){
    document.getElementById('botonIntentarDeNuevo').style.display='none';
}




function muestraBotonIntentarDeNuevo(){
    document.getElementById('botonIntentarDeNuevo').style.display='block';
}



ocultaBotonIntentarDeNuevo()
function ocultaMensaje(){
    document.getElementById("message").style.display+"none";


            document.getElementById("message").textContent = "Empate!".style.display="none";


}





