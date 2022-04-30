let num = [5, 8, 2, 18, 9, 3, 10,]
function ordenar(a, b) { //Função que transforma os elementos do array em Number, podendo assim ser ordenado.
    return a - b
}
num.sort(ordenar)
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}