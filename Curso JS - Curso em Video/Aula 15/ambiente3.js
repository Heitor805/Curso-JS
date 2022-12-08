var num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor da variável é:${num[0]}`)
let pos = num.indexOf(8)
console.log(`O valor 8 esta na posição ${pos}`)
let pos1 = num.indexOf(4)
if (pos1 == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 esta na posição ${pos1}`)
}
/*procura se existe o VALOR dentro da variavel, não é o número do index*/
/*Valor não encontrado = -1*/

/*o push adiciona um valor no começo ou fim criando um novo espaço na variável*/
/*Lembrar q se adicionar o push antes do sort o valor 1 irá no começo da variavel e se colocar depois irá no final*/ 