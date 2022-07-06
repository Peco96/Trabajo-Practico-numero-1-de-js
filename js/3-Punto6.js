//Punto 6
let numero1 = parseInt(prompt("ingresar un primer numero"));
let numero2 = parseInt(prompt("ingresar un segundo numero"));
console.log(numero1);
console.log(numero2);
if (numero1 > numero2){
    document.write ("El primer numero es el mayor: " + numero1);
   
}
else if (numero1 == numero2){
     document.write ("Ambos numeros son iguales: " + numero1);
    
 } else{
     document.write ("El segundo numero es el mayor: " + numero2);
 }
