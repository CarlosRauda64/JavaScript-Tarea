const alumno = {
    name: 'Carlos Rauda',
    carnet: 'RC22011',
    notes: [7, 9.2, 5, 8.6]
}

function calcularNotaFinal({name:nombre, carnet, notes:notas}){
    notaFinal = 0
    for(let i = 0; i<notas.length; i++){
        switch(i){
            case 0:
                notaFinal += notas[i]*0.2
                break
            case 1:
                notaFinal += notas[i]*0.4
                break
            case 2:
                notaFinal += notas[i]*0.1
                break
            case 3:
                notaFinal += notas[i]*0.3
                 break
        }
    }
    console.log(`Nombre: ${nombre}`)
    console.log(`Carnet: ${carnet}`)
    console.log(`Nota final: ${notaFinal}`)
}

calcularNotaFinal(alumno)