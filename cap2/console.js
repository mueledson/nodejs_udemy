//mais de um valor
const x = 1
const y = 'DANTE'
const z = [1, 2]

console.log(x, y, z)

// contagem de impressões
console.count(`O valor de X é: ${x}, contagem`)
console.count(`O valor de X é: ${x}, contagem`)
console.count(`O valor de X é: ${x}, contagem`)
console.count(`O valor de X é: ${x}, contagem`)

// variavel entre string
console.log("O Nome é %s, ele é jogador", y)

//limpa o console
setInterval(() => {
    console.clear()
}, 2000);