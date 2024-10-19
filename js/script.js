document.getElementById("invertButton").addEventListener("click", function () {
    var inputText = document.getElementById("inputText").value;
    var outputText = document.getElementById("outputText");

    function inverterPalavras(text) {
        return text.split(' ').map(function (palavra) {
            return palavra.split('').reverse().join('');
        }).join(' ');
    }

    var textoInvertido = inverterPalavras(inputText);
    outputText.innerHTML = textoInvertido;
});
