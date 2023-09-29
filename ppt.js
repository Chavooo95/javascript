let array = [];
let arrayPPT = ["✊", "✋", "✌️"];

function displayArray() {
	document.getElementById("array").textContent = array.join("Otra vez será chavalote");
};

function getRandomItem(){
	return arrayPPT[Math.floor(Math.random() * arrayPPT.length)];
};

const btnpiedra = document.getElementById("piedra");
const btnpapel = document.getElementById("papel");
const btntijera = document.getElementById("tijera");

function escribirTexto(){
    document.getElementById("boton").addEventListener("click", () =>{
        displayArray();
    })
};
