let enteros = [20,30,15,-5,35,-80,90,54,13,16]

const cantidadNegativos = (enteros) =>{
    let cantidadNegativos = 0
    enteros.forEach(entero => {
        if(entero < 0){
            cantidadNegativos++
        }
    });
    return cantidadNegativos
}
const cantidadPositivos= (enteros) =>{
    let cantidadPositivos = 0
    enteros.forEach(entero => {
        if(entero >= 0){
            cantidadPositivos++
        }
    });
    return cantidadPositivos
}
const cantidadMultiplos15 = (enteros) =>{
    let cantidadMultiplos = 0
    enteros.forEach(entero => {
        if(entero%15 == 0){
            cantidadMultiplos++
        }
    });
    return cantidadMultiplos
}
const sumaNumerosPar = (enteros) =>{
    let sumaNumerosPar = 0
    enteros.forEach(entero => {
        if(entero%2 == 0){
            sumaNumerosPar += entero
        }
    });
    return sumaNumerosPar
}
console.log(`Cantidad de numeros positivos: ${cantidadPositivos(enteros)}`)
console.log(`Cantidad de numeros negativos: ${cantidadNegativos(enteros)}`)
console.log(`Cantidad de numeros multplos de 15: ${cantidadMultiplos15(enteros)}`)
console.log(`Suma de numeros par: ${sumaNumerosPar(enteros)}`)
