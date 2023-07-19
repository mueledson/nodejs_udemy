const fs = require("fs")

if (!fs.existsSync('./minhaPasta')) {
    console.log("NÃO EXISTE")
    fs.mkdirSync('./minhaPasta')
}else if(fs.existsSync('./minhaPasta')){
    console.log("EXISTE")
}