let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function adicionar() {
    if (num.value.length == 0 || num.value < 0 || num.value > 100) {
        window.alert('[Erro] O valor digitado é invalido!')
    } else {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()
}

function iniciar() {
    if (valores.length == 0) {
        window.alert('Adicione valores na lista antes de iniciar!')
    } else {
        let tot = valores.length
        let soma = 0
        let media = 0
        let maior = valores[0]
        let menor = valores[0]
        for (let pos in valores) {
            soma += valores[pos]
            media = soma / tot
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `O menor valor informado foi ${menor}.<br>`
        res.innerHTML += `O maior valor informado foi ${maior}.<br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
        res.innerHTML += `O total de numeros informados foi ${tot}.<br>`
        res.innerHTML += `A media de todos os valores é ${media}.<br>`
    }
}