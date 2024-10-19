document.getElementById("invertButton").addEventListener("click", function () {
    var inputText = document.getElementById("inputText").value;
    var outputText = document.getElementById("outputText");

    // Função para inverter cada palavra
    function inverterPalavras(text) {
        return text.split(' ').map(function (palavra) {
            return palavra.split('').reverse().join('');
        }).join(' ');
    }

    // Inverte as palavras e exibe o resultado
    var textoInvertido = inverterPalavras(inputText);
    outputText.innerHTML = textoInvertido;
});
