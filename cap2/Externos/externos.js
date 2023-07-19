const minimist = require("minimist")

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const profissao = args['profisao']

console.log(nome, profissao)
console.log(`O Nome dele é ${nome} ele trabalha de: ${profissao}`)