const ferrari = {
    modelo: 'F40',
    veloMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjetivo(){}
console.log(typeof Object, typeof MeuObjetivo)
console.log(Object.prototype, MeuObjetivo.prototype)