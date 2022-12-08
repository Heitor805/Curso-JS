/*function soma(n1, n2) {
    return n1 + n2
}
*/

//console.log(soma(2,5))
/*Ak o 2 assume o valor de n1 e o 5 o valor de n2*/

//console.log(soma(2))
/*Ak apenas o n1 está ganhando um valor e o n2 está indefinido*/

function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(7, 3))
//Ak o n1 recebe 7 e o n2 recebe 3, porém caso algum dos valores não for definido então n1 e n2 serão considerados 0