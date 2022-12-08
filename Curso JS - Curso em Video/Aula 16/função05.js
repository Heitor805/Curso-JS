//RECURSIVIDADE, quando uma função chama a si mesma em sua execução
function fatorial(n) {
    if(n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/*
5! = 5 * 4 * 3 * 2 * 1
5! = 5 * 4!

n! = n * (n-1)!
exceto se for 1, pq 1! = 1
*/