function contar() {
    var inicio = window.document.getElementById("inicio")
    var final = window.document.getElementById("final")
    var passo = window.document.getElementById("passo")
    var msg = window.document.getElementById("msg")
    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        msg.innerHTML = "Impossível contar"
    } else {
        msg.innerHTML = ("Contando...")
        var n1 = Number(inicio.value)
        var n2 = Number(final.value)
        var n3 = Number(passo.value)
        if (n3 <= 0) {
            window.alert("Passo Inválido")
            n3 = 1
        }
        if(n1 < n2) {
            for(var c = n1; c <= n2; c += n3) {
                msg.innerHTML += `${c} \u{1F449}`
            }
         } else {
            for(var c = n1; c >= n2; c -= n3) {
                msg.innerHTML += `${c} \u{1F449}`
            }
         }
         msg.innerHTML += `\u{1F3C1}`
    }
} 
/*
lembrar: ==(igual) =+(somar alguma coisa)
*/