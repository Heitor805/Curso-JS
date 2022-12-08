let valores = [8, 1, 7, 4, 2, 9]
/*
console.log(valores[0])
for(let pos=0; pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
/*o in indica "dentro" então, "para cada variavel(index de valores) dentro de pos vc irá:"*/

/*os dois métodos estão corretos*/
/*let é igual a var só muda aplicação em alguns casos*/