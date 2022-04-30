//A mãe manda o programador para comprar leite, dizendo que ele vá ao mercado para comprar uma garrafa de leite e ver se tem ovo, se sim, então traga seis; Ele chega em casa com seis garrafas de leite, a mãe pergunta por que ele trouxe seis garrafas de leite e ele responde: tinha ovo;
function mercado(ovo) {
    if (ovo >= 1) {
        return 'Trouxe 6 caixas de leite'
    } else {
        return 'Trouxe 1 caixa de leite'
    }
}

console.log(mercado(1))