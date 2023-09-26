//entrará en el if la primera vez sumándole un valor a la i, no cumpliendo la condicion de i===0
//y después hará 5 iteraciones más para llevar el número a 5. En total 6 iteraciones
let numero = 1;
let i = 0;
do {
    if(i===0){
        i++;
        numero--;
        console.log(numero);
    } else {
        numero++;
        console.log(numero);
    }
} while (numero<5);