// punto 11
let numero1 = parseInt(prompt("ingresar un primer numero"));
console.log(numero1);
if (numero1 % 2 === 0 && numero1 % 3 === 0) {
  document.write("El numero es divisible en 2 y 3: " + numero1);
} else if (numero1 % 2 === 0 && numero1 % 5 === 0) {
  document.write("El numero es divisible en 2 y 5: " + numero1);
} else if (numero1 % 2 === 0 && numero1 % 7 === 0) {
  document.write("El numero es divisible en 2 y 7: " + numero1);
} else if (numero1 % 3 === 0 && numero1 % 5 === 0) {
  document.write("El numero es divisible en 3 y 5: " + numero1);
} else if (numero1 % 3 === 0 && numero1 % 7 === 0) {
  document.write("El numero es divisible en 3 y 7: " + numero1);
} else if (numero1 % 5 === 0 && numero1 % 7 === 0) {
  document.write("El numero es divisible en 5 y 7: " + numero1);
} else if (numero1 % 2 === 0) {
  document.write("El numero es divisible en 2: " + numero1);
} else if (numero1 % 3 === 0) {
  document.write("El numero es divisible en 3: " + numero1);
} else if (numero1 % 5 === 0) {
  document.write("El numero es divisible en 5: " + numero1);
} else if (numero1 % 7 === 0) {
  document.write("El numero es divisible en 7: " + numero1);
} else {
  document.write("El numero no es divisible ni por 2,3,4,5: " + numero1);
}