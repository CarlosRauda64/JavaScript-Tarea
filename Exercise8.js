function tablaMultiplicar(numero){
    i = 1
    while(i <= 10){
        console.log(`${numero} x ${i}: ${numero*i}`)
        i++
    }
}

let numero = 10

tablaMultiplicar(numero)