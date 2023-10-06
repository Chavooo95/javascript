document.addEventListener("DOMContentLoaded", function () {
    const porcentajeBarra = document.getElementById("conservadores_Rajoy");
    const porcentajeTexto = porcentajeBarra.querySelector(".progress-text");
    let porcentaje = 100;

    function reducirPorcentaje() {
        if (porcentaje > 0) {
            porcentaje--;
            porcentajeBarra.style.transform = `rotate(${360  - porcentaje*3.6}deg)`;
            porcentajeTexto.textContent = `${porcentaje}%`;
        } else {
            clearInterval(intervalo);
        }
    }

    let intervalo;

    intervalo = setInterval(reducirPorcentaje, 100); 
});

document.addEventListener("DOMContentLoaded", function () {
    const porcentajeBarraComida = document.getElementById("progress_comida");
    const porcentajeTextoComida = porcentajeBarraComida.querySelector(".progress-text");
    let porcentajeComida = 100;

    function reducirPorcentajeComida() {
        if (porcentajeComida > 0) {
            porcentajeComida--;
            porcentajeBarraComida.style.transform = `rotate(${360 - porcentajeComida * 3.6}deg)`;
            porcentajeTextoComida.textContent = `${porcentajeComida}%`;
        } else {
            clearInterval(intervaloComida);
        }
    }

    let intervaloComida;

    intervaloComida = setInterval(reducirPorcentajeComida, 500);
});

document.addEventListener("DOMContentLoaded", function () {
    const porcentajeBarraDeporte = document.getElementById("progress_deporte");
    const porcentajeTextoDeporte = porcentajeBarraDeporte.querySelector(".progress-text");
    let porcentajeDeporte = 100;

    function reducirPorcentajeDeporte() {
        if (porcentajeDeporte > 0) {
            porcentajeDeporte--;
            porcentajeBarraDeporte.style.transform = `rotate(${360 - porcentajeDeporte * 3.6}deg)`;
            porcentajeTextoDeporte.textContent = `${porcentajeDeporte}%`;
        } else {
            clearInterval(intervaloDeporte);
        }
    }

    let intervaloDeporte;

    intervaloDeporte = setInterval(reducirPorcentajeDeporte, 785);
});

document.addEventListener("DOMContentLoaded", function () {
    const porcentajeBarraPelea = document.getElementById("progress_pelea");
    const porcentajeTextoPelea = porcentajeBarraPelea.querySelector(".progress-text");
    let porcentajePelea = 100;

    function reducirPorcentajePelea() {
        if (porcentajePelea > 0) {
            porcentajePelea--;
            porcentajeBarraPelea.style.transform = `rotate(${360 - porcentajePelea * 3.6}deg)`;
            porcentajeTextoPelea.textContent = `${porcentajePelea}%`;
        } else {
            clearInterval(intervaloPelea);
        }
    }

    let intervaloPelea;

    intervaloPelea = setInterval(reducirPorcentajePelea, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
    const porcentajeBarraDormir = document.getElementById("progress_dormir");
    const porcentajeTextoDormir = porcentajeBarraDormir.querySelector(".progress-text");
    let porcentajeDormir = 100;

    function reducirPorcentajeDormir() {
        if (porcentajeDormir > 0) {
            porcentajeDormir--;
            porcentajeBarraDormir.style.transform = `rotate(${360 - porcentajeDormir * 3.6}deg)`;
            porcentajeTextoDormir.textContent = `${porcentajeDormir}%`;
        } else {
            clearInterval(intervaloDormir);
        }
    }

    let intervaloDormir;

    intervaloDormir = setInterval(reducirPorcentajeDormir, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    const porcentajeBarra = document.getElementById("progress_comida");
    const porcentajeFill = porcentajeBarra.querySelector(".progress-fill");
    let porcentaje = 100;

    function reducirPorcentaje() {
        if (porcentaje > 0) {
            porcentaje--;
            porcentajeFill.style.width = `${porcentaje}%`;
        } else {
            clearInterval(intervalo);
        }
    }

    let intervalo;

    intervalo = setInterval(reducirPorcentaje, 5);
});