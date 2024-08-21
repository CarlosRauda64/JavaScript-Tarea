function comparadorDeNumeros(num1, num2){
    if (num1 > num2) {
        console.log(`El numero ${num1} es mayor que ${num2}`)
    } else {
        if (num2 > num1) {
            console.log(`El numero ${num2} es mayor que ${num1}`)
        } else {
            console.log(`Ambos numeros son iguales`)
        }
    }
}

comparadorDeNumeros(10,5)
comparadorDeNumeros(10,20)
comparadorDeNumeros(10,10)