function ObtenerEdades(turno, cantidad) {
    let edades = [];
    for (let i = 1; i <= cantidad; i++) {
        let edad = parseInt(document.getElementById(turno + i).value);
        edades.push(edad);
    }
    return edades;
}

function CalcularPromedios() {


    let edadesM = ObtenerEdades('m', 5); 
    let edadesT = ObtenerEdades('t', 6);
    let edadesN = ObtenerEdades('n', 11);

 
    let sumaM = 0;
    for (let i = 0; i < edadesM.length; i++) {
        sumaM += edadesM[i];
    }
    let promedioM = sumaM / edadesM.length;

    let sumaT = 0;
    for (let i = 0; i < edadesT.length; i++) {
        sumaT += edadesT[i];
    }
    let promedioT = sumaT / edadesT.length;

    let sumaN = 0;
    for (let i = 0; i < edadesN.length; i++) {
        sumaN += edadesN[i];
    }
    let promedioN = sumaN / edadesN.length;


    let mayorPromedio = 'Mañana';
    if (promedioT > promedioM && promedioT > promedioN) {
        mayorPromedio = 'Tarde';
    } else if (promedioN > promedioM && promedioN > promedioT) {
        mayorPromedio = 'Noche';
    }

    document.getElementById('resultado').innerHTML = 
    "Promedio Mañana: " + promedioM + "<br>" +
    "Promedio Tarde: " + promedioT + "<br>" +
    "Promedio Noche: " + promedioN + "<br>" +
    "El mayor promedio es el turno de: " + mayorPromedio;

}
