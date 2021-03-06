// São funções
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Vinicius Marques'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

/* 
    NÃO SOBRESCREVER FUNÇÕES QUE JÁ EXISTEM DE FORMA GLOBAL
    String.prototype.toString = function(){
        return 'LASCOU TUDO'
    }
*/ 
