let emoji = ["🍔", "🥙", "🍣", "🍕", "🍜", "🍱", "🍙", "🍘", "🥑"];
console.log(emoji.fill("🍺", "4", emoji.length));

let encontrarPiña = ["🍕", "🍕", "🍍", "🍕", "🍕"];
console.log(encontrarPiña.includes("🍍"));
encontrarPiña.splice(2, 1);
console.log(encontrarPiña);

let champis = ["🍓", "🍋", "🍓", "🍋", "🍓"];
let champisTransformados = champis.map(icono => {
    // if (icono === "🍓") {
    //     return "🍄";
    // } else {
    //     return icono;
    // }
    return icono === "🍓"?"🍄":icono;
});
console.log(champisTransformados);

let picante = ["🌶️", "🥛", "🌶️", "🥛", "🌶️", "🥛"];
let sudor = picante.flatMap(icono => {
    return icono === "🌶️"?["🌶️", "🥵"]:icono;
});
console.log(sudor);

let cartas = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];
let joker = [];
let nextCard = null;

for (let i = cartas.length - 1; i >= 0; i--) {
    const currentCard = cartas[i];
    if (nextCard !== "🃏" && currentCard === "🎴") {
        joker.unshift("🃏");
    }
    joker.unshift(currentCard);
    nextCard = currentCard;
    
}
console.log(joker);