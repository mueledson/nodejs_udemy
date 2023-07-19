// externo
const minimist = require("minimist")

// interno
const constSoma = require('./soma').Soma
const args = minimist(process.argv.slice(2))

const valor1 = parseInt(args['a'])
const valor2 = parseInt(args['b'])

constSoma(valor1, valor2)