function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var msg = document.getElementById('msg')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Por gentileza, verificar os dados informados e tentar novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'masculino'
            if (idade >= 0 && idade < 10) {
                msg.innerHTML = 'Bebê até 3 anos.<br>Criança até os 10 anos.'
            } else if (idade <24) {
                msg.innerHTML = 'Adolescente até os 15 anos.<br>Jovem até os 24.'
            } else if (idade < 59) {
                msg.innerHTML = 'Adulto Jovem até os 44 anos.<br>Adulto até os 59 anos.'
            } else {
                msg.innerHTML = 'Idoso'
            }
        } else if (fsex[1].checked) {
            genero = 'feminino'
            if (idade >= 0 && idade < 10) {
                msg.innerHTML = 'Bebê até 3 anos.<br>Criança até os 10 anos.'
            } else if (idade <24) {
                msg.innerHTML = 'Adolescente até os 15 anos.<br>Jovem até os 24.'
            } else if (idade < 59) {
                msg.innerHTML = 'Adulto Jovem até os 44 anos.<br>Adulto até os 59 anos.'
            } else {
                msg.innerHTML = 'Idoso'
            }
    }
    res.style.textAlign = 'center'
    msg.style.textAlign = 'center'
    res.innerHTML = `Detectamos uma pessoa do sexo ${genero} com ${idade} anos!`
    }
}