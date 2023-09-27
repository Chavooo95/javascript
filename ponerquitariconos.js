let array = [];
let arrayIconos = ["🎴", "🃏", "🥵", "🌶️", "🍓", "🥛", "🍄", "🍋", "🍍", "🍕", "🍺", "🥑"];

    function displayArray(){
        document.getElementById("array").textContent = array.join(", ");
    }
        document.getElementById("push").addEventListener("click", function(){
        array.push(arrayIconos[Math.floor(Math.random()*arrayIconos.length)]);
        displayArray();        
});

        document.getElementById("unshift").addEventListener("click", function(){
        array.unshift(arrayIconos[Math.floor(Math.random()*arrayIconos.length)]);
        displayArray();
});

        document.getElementById("pop").addEventListener("click", function(){
        array.pop(arrayIconos[Math.floor(Math.random()*arrayIconos.length)]);
        displayArray();
});

        document.getElementById("shift").addEventListener("click", function(){
        array.shift(arrayIconos[Math.floor(Math.random()*arrayIconos.length)]);
        displayArray();
});
