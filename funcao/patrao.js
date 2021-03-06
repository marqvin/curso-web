// estratégia 1 para gerar valor patrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}                                     // bug
console.log(soma1(2, 2, 2), soma1(2), soma1(0, 0, 0))

// estratégia 2, 3 e 4 para valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1 // 2
    b = 1 in arguments ? b : 1 // 3
    c =  isNaN(c) ? 1 : c // 4
    return a + b + c
}

console.log(soma2(), soma2(5, 5, 5))