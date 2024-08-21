let trabajador = {
    nombre: 'Pepe Grillo',
    salario: 400.50,
    categoria: 'a',
}

const aumentoSalarial = ({nombre, salario, categoria}) => {
    let aumento = 0
    switch(categoria.toUpperCase()){
        case 'A':
            aumento = salario*0.15
            break
        case 'B':
            aumento = salario*0.30
            break
        case 'C':
            aumento = salario*0.10
            break
        case 'D':
            aumento = salario*0.20
    }
    console.log(`Nombre: ${nombre}`)
    console.log(`Salario: $${salario}`)
    console.log(`Categoria: ${categoria.toUpperCase()}`)
    console.log(`Aumento salarial de: $${aumento.toFixed(2)}`)
}

aumentoSalarial(trabajador)