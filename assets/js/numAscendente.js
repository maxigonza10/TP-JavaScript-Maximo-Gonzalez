let numero1 = parseInt(prompt('Ingrese primer numero'))
let numero2 = parseInt(prompt('Ingrese segundo numero'))
let numero3 = parseInt(prompt('Ingrese tercer numero'))
if (numero1 > numero2 && numero1 > numero3 && numero2 > numero3){
    console.log(numero1)
    console.log(numero2)
    console.log(numero3)
}else if(numero1 > numero2 && numero1 > numero3 && numero3 > numero2){
    console.log(numero1)
    console.log(numero3)
    console.log(numero2)
}else if (numero2 > numero1 && numero2 > numero3 && numero1 > numero3){
    console.log(numero2)
    console.log(numero1)
    console.log(numero3)
}else if (numero2 > numero1 && numero2 > numero3 && numero3 > numero1){
    console.log(numero2)
    console.log(numero3)
    console.log(numero1)
}else if (numero3 > numero1 && numero3 > numero2 && numero2 > numero1){
    console.log(numero3)
    console.log(numero2)
    console.log(numero1)
}else if (numero3 > numero1 && numero3 > numero2 && numero1 > numero2){
    console.log(numero3)
    console.log(numero1)
    console.log(numero2)
}else if(numero1 > numero2 && numero1 > numero3 && numero2 == numero3){
    console.log(numero1)
    console.log(numero2)
    console.log(numero3)
}else if(numero2 > numero1 && numero2 > numero3 && numero1 == numero3){
    console.log(numero2)
    console.log(numero1)
    console.log(numero3)
}else if(numero3 > numero1 && numero3 > numero2 && numero1 == numero2){
    console.log(numero3)
    console.log(numero1)
    console.log(numero2)
}else{
    console.log(numero1)
    console.log(numero2)
    console.log(numero3)
}