// ejercicio 1 

let  cuentaA = 5; 
let cuentaB = 10; 

cuentaA = cuentaA + cuentaB 
cuentaB = cuentaA - cuentaB
cuentaA = cuentaA - cuentaB

console.log("A:", cuentaA);
console.log("B:", cuentaB);

// ejercicio 2

let  nivel = Number(prompt("ingrese el nivel"))
let honor = 100;
let tienePaseVIP = false;

if (nivel >= 20 && (honor === 100 || tienePaseVIP === true)) {
  console.log("Puede entrar al servidor");
} else {
  console.log("No puede entrar al servidor");
}