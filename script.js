function verificar() {
    let inicial = document.getElementById("txtinicial")
    let final = document.getElementById("txtfinal")
    let passo = document.getElementById("txtpasso")
    let resultado = document.getElementById("res")

    // Verificador de Caracteres // - Esse teste de verificação é sobre a quantidade de caracteres e não sobre o valor colocado no campo
    // Se o "inicio", "final" ou "contador" estiverem vazios (0) irá exibir a mensagem de "Erro!"
    // O length é utilizado para a quantidade de caracteres, no caso o 0 é quando está vazio e o 1 (ou outros números) é quando tem algo
    if (inicial.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        window.alert("Erro!")
    } else {
        res.innerHTML = "Contando: "
        
        // Irá converter em número as variavéis de string declaradas anteriormente
        let i = Number(inicial.value)
        let f = Number(final.value)
        let p = Number(passo.value)

        // "c" == contador
        // c = i; o contador vai começar no início
        // c <= f; enquanto o contador for menor ou igual ao fim
        // c += p o contador vai receber ele mesmo + passo (incremento)
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
