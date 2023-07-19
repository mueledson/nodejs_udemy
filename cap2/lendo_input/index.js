const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Qual a sua linguagem preferida? ", (language) => {
    if (language === "Python") {
        console.log("Isso nem é linguagem")
    } else if(language === "MYSQL"){
        console.log("Isso é banco de dados! .-.")
    } else{
        console.log(`A minha linguagem favorita é: ${language}`)
    }

    readline.close()
})  