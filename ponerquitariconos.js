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

document.getElementById("remove_at").addEventListener("click", () => {
	if(arrayIconos[(document.getElementById("input1").value)] != undefined){
		array.splice(document.getElementById("input1").value, 1);
	displayArray();
	}else{
		alert("Eso no va así crack");
	}
});

document.getElementById("insert_at").addEventListener("click", () => {
		array.splice(document.getElementById("input").value, 0, getRandomItem());
	displayArray();

});
