function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

console.log(parimpar(4))

/*o q acontece é, a function parimpar precisa de n para ser acionada, como n não existe é pulado a execução da function, depois eu determino n como sendo um valor(4), agora com n 
definido o código volta para function e a executa usando o valor 4, e depois podemos colocar um return na function para exibir o resultado
*/
//lembra tb % = dividido