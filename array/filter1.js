const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]
console.log(produtos.filter(function(p) {
    return p.preco > 1000
}))

const acima500 = preco => preco.preco >= 500
const fragil = fragil => fragil.fragil

console.log(produtos.filter(acima500).filter(fragil))