const numeroAdivinhacao = Math.floor(Math.random() * 100) + 1;
console.log("Número a ser adivinhado (para fins de teste): " + numeroAdivinhacao);

const inputPalpite = document.getElementById("palpite");

let numeroTentativas = 10;
document.getElementById("numeroTentativas").textContent = "Número de tentativas restantes: " + numeroTentativas;

function capturarDados() {
    const valorInput = document.getElementById("palpite").value; // Captura o valor do input
    let palpiteNumero = Number(valorInput); // Converte para número real
    
    if (!palpiteNumero || palpiteNumero < 1 || palpiteNumero > 100) {// Validação do palpite entre o intervalo definido
        alert("Por favor, insira um número válido entre 1 e 100.");
        return;
    }
    
    if (palpiteNumero === numeroAdivinhacao) {
        alert("Parabéns! Você adivinhou o número corretamente: " + numeroAdivinhacao);//palpite correto
        numeroTentativas = 0; // Encerra o jogo
        //refreshPage(); - precisa finalizar ao encotrar o valor correto
    } else if (palpiteNumero < numeroAdivinhacao) {
        alert("O número é maior. Tente novamente."); //palpite abaixo do número correto
        numeroTentativas--;
        document.getElementById("numeroTentativas").textContent = "Número de tentativas restantes: " + numeroTentativas;
    } else {
        alert("O número é menor. Tente novamente."); //palpite acima do número correto
        numeroTentativas--;
        document.getElementById("numeroTentativas").textContent = "Número de tentativas restantes: " + numeroTentativas;
    }
    
    if (numeroTentativas === 0 && palpiteNumero !== numeroAdivinhacao) {
        alert("Fim do jogo! O número era: " + numeroAdivinhacao);
    }
    
    inputPalpite.value = ""; // Limpa o campo de input após cada tentativa
}