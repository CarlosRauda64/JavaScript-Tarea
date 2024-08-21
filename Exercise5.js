let coche = prompt('Digita el coche que quieres: Ford Fiesta, Ford Focus o Ford Escape')
coche = coche.toUpperCase()
console.log(coche)
const descuentoCoche = (coche) =>{
    switch(coche){
        case 'FORD FIESTA':
            alert(`Coche seleccionado ${coche}\nDescuento: 5%`)
            break
        case 'FORD FOCUS':
            alert(`Coche seleccionado ${coche}\nDescuento: 10%`)
            break
        case 'FORD ESCAPE':
            alert(`Coche seleccionado ${coche}\nDescuento: 20%`)
            break
        default:
            alert(`Coche invalido`)
            break
    }
}
descuentoCoche(coche)