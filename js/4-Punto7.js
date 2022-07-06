//Punto 7
let numero1 = parseInt(prompt("ingresar un primer numero"));
let numero2 = parseInt(prompt("ingresar un segundo numero"));
let numero3 = parseInt(prompt("ingresar un Tercer numero"));
console.log(numero1);
console.log(numero2);
console.log(numero3);
if (numero1 > numero2 && numero1 > numero3){
    document.write ("El primer numero es el mayor: " + numero1);
   
}
else if (numero2 > numero1 && numero2 > numero3){
     document.write ("El Segundo numero es el mayor: " + numero2);
    
 } else if (numero3 > numero1 && numero3 > numero1){
     document.write ("El tercer numero es el mayor: " + numero3);
 }else{
    document.write ("Todos los numeros son iguales:  " + numero2);
}