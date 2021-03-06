function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params){
    const obj = {}
    //associei o protótipo desse obj, ao atributo prototype da função f
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bom Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)