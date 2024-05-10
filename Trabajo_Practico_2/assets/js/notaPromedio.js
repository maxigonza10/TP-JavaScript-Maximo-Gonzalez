let nota1 = parseInt(prompt("Ingrese la nota del primer trimestre"));
let nota2 = parseInt(prompt("Ingrese la nota del segundo trimestre"));
let nota3 = parseInt(prompt("Ingrese la nota del tercer trimestre"));

if (nota1 >= 1 && nota1 <= 10 && nota2 >= 1 && nota2 <= 10 && nota3 >= 1 && nota3 <= 10) {
    let promedio = (nota1 + nota2 + nota3) / 3;

    switch (true) {
        case promedio >= 1 && promedio <= 3:
            console.log("Nota Insuficiente");
            break;
        case promedio >= 4 && promedio <= 5:
            console.log("Nota Regular");
            break;
        case promedio >= 6 && promedio <= 7:
            console.log("Nota Buena");
            break;
        case promedio >= 8 && promedio <= 9:
            console.log("Nota Muy Buena");
            break;
        case promedio === 10:
            console.log("Nota Sobresaliente");
            break;
        default:
            console.log("Error en el cálculo del promedio.");
    }
} else {
    console.log("Ingrese números válidos (del 1 al 10) para las notas.");
}