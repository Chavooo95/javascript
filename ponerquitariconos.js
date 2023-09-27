let array = [];
let arrayIconos = ["🎴", "🃏", "🥵", "🌶️", "🍓", "🥛", "🍄", "🍋", "🍍", "🍕", "🍺", "🥑"];

function getRandomItem(){
	return arrayIconos[Math.floor(Math.random() * arrayIconos.length)];
}

function displayArray() {
	document.getElementById("array").textContent = array.join(", ");
}
document.getElementById("push").addEventListener("click", () => {
	array.push(getRandomItem());
	displayArray();
});

document.getElementById("unshift").addEventListener("click", () => {
	array.unshift(getRandomItem());
	displayArray();
});

document.getElementById("pop").addEventListener("click", () => {
	array.pop(getRandomItem());
	displayArray();
});

document.getElementById("shift").addEventListener("click", () => {
	array.shift(getRandomItem());
	displayArray();
});

document.getElementById("input1").addEventListener("click", () => {
	const position = document.getElementById("input1").value;
	array.splice(position, 1);
	displayArray();

});
