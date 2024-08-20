let numero = [1,2,5,4,7,8,9,6,20,50,45,63,15,19]

console.log(numero)

numero.sort()
console.log(numero)

const compareNumbers =(a, b) => a-b;

numero.sort(function(a,b){
    return b-a;
})

console.log(numero)

personas = [{nombre: "juan",edad:21},{nombre: "Pedro",edad:30},{}]