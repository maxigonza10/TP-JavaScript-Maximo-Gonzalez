let edad = parseInt(prompt('Ingrese su edad'))
if (edad >= 0 && edad <= 12){
    console.log('Rango de edad: Niño')
}else if(edad >= 13 && edad <= 19){
    console.log('Rango de edad: Adolescente')
}else if(edad >= 20 && edad <= 59){
    console.log('Rango de edad: Adulto')
}else if(edad >= 60 && edad <= 125){
    console.log('Rango de edad: Adulto Mayor')
}else{
    console.log('error: Edad invalida. Ingrese otra edad')
}