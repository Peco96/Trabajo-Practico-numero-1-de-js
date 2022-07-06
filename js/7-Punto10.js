// Punto 10
let numero1 = parseInt(prompt("ingresar un primer numero"));
console.log(numero1);
if ((numero1 % 2) === 0){
    document.write ("El numero es divisible en 2: " + numero1);
} else if ((numero1 % 3) === 0){
    document.write ("El numero es divisible en 3: " + numero1);
}else if ((numero1 % 5) === 0){
    document.write ("El numero es divisible en 5: " + numero1);
} else if ((numero1 % 7) === 0){
    document.write ("El numero es divisible en 7: " + numero1);
}else{
    document.write ("No es divisible por 2,3,5,7: " + numero1);
}