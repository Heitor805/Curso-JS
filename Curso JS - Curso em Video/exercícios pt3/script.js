function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]Data Inválida')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'bebeh.png')
            } else if (idade >=14 && idade < 25) {
                //jovem
                img.setAttribute('src', 'jovemh.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'adulto.png')
            }else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'bebem.png')
            } else if (idade >=14 && idade < 25) {
                //jovem
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'adulta.png')
            }else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
//Number(x) concerteu o item x para number