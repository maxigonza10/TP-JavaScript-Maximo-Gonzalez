let producto = parseInt(prompt("ingrese el precio del producto"))
let cantidad = parseInt(prompt("ingrese la cantidad"))
let total = cantidad * producto
let descuento = total * 0.85
let totalDescuento = total - descuento

if (producto < 1){
    alert("el precio no puede ser 0")
}
if (cantidad < 1){
    alert("la cantidad no puede ser 0")
}

if (cantidad >= 10 && total > 20000){
    console.log ("Precio con descuento: " + totalDescuento)
}
else if (cantidad >= 10 && total <= 20000){
    console.log("el precio no supero los $20000")
}
else if (cantidad < 10 && total > 20000){
    console.log("la cantidad no supero los 10 articulos")
}
else if (cantidad < 10 && total < 20000){
    console.log ("no supero la cantidad ni el precio")
}
else{
    console.log("ingrese un numero valido")
}
