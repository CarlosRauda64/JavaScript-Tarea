let ciudad = 'Palma'
let destino = 'COSTA DEL MAR'

function descuentoViaje(ciudad, destino){
    if(ciudad == 'PALMA'){
        if (destino == 'LA COSTA DEL SOL') {
            console.log('Se aplica un descuento del 5%')
        }else{
            if (destino == 'PANCHIMALCO') {
                console.log('Se aplica un descuento del 10%')
            }else{
                if (destino == 'PUERTO TRIUNFO') {
                    console.log('Se aplica un descuento del 15%')
                }else{
                    console.log('No se aplica descuento')
                }
            }
        }
    }else{
        console.log('No se aplica descuento')
    }
}

descuentoViaje(ciudad.toUpperCase(), destino.toUpperCase())