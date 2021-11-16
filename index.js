function validaEntrada(args) {
    for (let i = 0; i < arguments.length; i++) {
        if (!!arguments[i] == false || arguments[i] < 0) {
            return false;
        }
    }
    return true;
}

function calcularIMC(kilos, altura) {
    altura = altura / 100;
    return (kilos / (altura * altura));
}

const formCalcularIMC = document.getElementById('form');

formCalcularIMC.addEventListener('submit', function (event) {
    event.preventDefault();

    const kilos = parseFloat(document.getElementById('kilos').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (validaEntrada(kilos, altura)) {
        const imc = calcularIMC(kilos, altura);
        document.getElementById('imc').value = parseFloat(imc).toFixed(2);
        verificarIMC(imc);
    } else {
        document.getElementById('imc').value = "## ERRO ##";
    }
});

function verificarIMC(imc) {
    if (imc < 17) {
        alert("Muito abaixo do peso")
    } else if (imc > 17 && imc <= 18.49) {
        alert("Abaixo do peso")
    } else if (imc >= 18.5 && imc <= 24.99) {
        alert("Peso normal")
    } else if (imc >= 25 && imc <= 29.99) {
        alert("Acima do peso")
    } else if (imc >= 30 && imc <= 34.99) {
        alert("Obesidade I")
    } else {
        alert("Obesidade II")
    }
}

function deleteMessage() {
    const list = document.querySelectorAll(".message");
    for (const item of list) {
        item.remove();
    }
} 