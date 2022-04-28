function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var mensagem = document.getElementById('mensagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    if (hora >= 0 && hora <12) {
        mensagem.innerHTML = 'Bom dia!'
        msg.innerHTML == `Agora são ${hora}:${minutos} da manhã!`
        img.src = 'imagens/manha.jpg'
    } else if (hora >= 12 && hora <=18) {
        mensagem.innerHTML = 'Boa tarde!'
        msg.innerHTML = `Agora são ${hora}:${minutos} da tarde!`
        img.src = 'imagens/tarde.jpg'
    } else {
        mensagem.innerHTML = 'Boa noite!'
        msg.innerHTML = `Agora são ${hora}:${minutos} da noite!`
        img.src = 'imagens/noite.jpg'
    }
}