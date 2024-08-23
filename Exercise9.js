let temperaturaCelsius = 35

const transformarFahrenheit = (celsius) =>{
    fahrenheit = (celsius*(9/5))+32
    if(fahrenheit >= 14 && fahrenheit <= 32){
        console.log('Temperatura baja')
    }
    if(fahrenheit > 32 && fahrenheit <= 68){
        console.log('Temperatura adecuada')
    }
    if(fahrenheit > 68 && fahrenheit <= 96){
        console.log('Temperatura alta')
    }
    if(fahrenheit > 96 || fahrenheit < 14){
        console.log('Temperatura desconocida')
    }
}

transformarFahrenheit(temperaturaCelsius)