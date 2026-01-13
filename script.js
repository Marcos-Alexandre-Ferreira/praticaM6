const numeroAdivinhacao = Math.floor(Math.random() * 100) + 1;
console.log("Número a ser adivinhado (para fins de teste): " + numeroAdivinhacao);

const inputPalpite = document.getElementById("palpite");

let numeroTentativas = 10;
document.getElementById("numeroTentativas").textContent = "Número de tentativas restantes: " + numeroTentativas;