let peso = parseInt(prompt("Qual seu peso?"));
let altura = (prompt("Qual sua altura aproximadamente?"));
let imc = Number(peso / (altura * altura)).toFixed(2);

switch (true) {
    case imc < 17:
        alert("Muito abaixo do peso!");
        break;

    case imc >= 17 && imc <= 18.49:
        alert("Abaixo do peso!");
        break;

    case imc >= 18.5 && imc <= 24.99:
        alert("Peso normal!");
        break;

    case imc >= 25 && imc <= 29.99:
        alert("Acima do peso!");
        break;

    case imc >= 30 && imc <= 34.99:
        alert("Obesidade I!");
        break;

    case imc >= 35 && imc <= 39.99:
        alert("Obesidade II!");
        break;
}

alert("OBRIGADO POR PARTICIPAR!!!");

