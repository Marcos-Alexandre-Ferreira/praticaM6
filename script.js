const numeroAdivinhacao = Math.floor(Math.random() * 100) + 1;
console.log("Número a ser adivinhado (para fins de teste): " + numeroAdivinhacao);

const inputPalpite = document.getElementById("palpite");

let numeroTentativas = 10;
document.getElementById("numeroTentativas").textContent = "Número de tentativas restantes: " + numeroTentativas;

function capturarDados() {
    const inputPalpite = document.getElementById("palpite").value; // Captura o valor do input
    const palpiteNumero = Number(inputPalpite); // Converte para número real
    
    if (isNaN(palpiteNumero) || palpiteNumero < 1 || palpiteNumero > 100) {// Validação do palpite enttre o intervalo definido
        alert("Por favor, insira um número válido entre 1 e 100.");
        return;
    }
}