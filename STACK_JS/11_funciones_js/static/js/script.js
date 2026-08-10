console.log("conexion exitosa")

//Funcion basica sin ningun parametro  
function saludar() {
   console.log("¡Hola, bienvenido!");
}
saludar("Luis");
saludar("Ana");



function saludarParam(nombre) {
   console.log("¡Hola, " + nombre + "!");
}
saludarParam("Javier");
saludarParam("Mathias");


function encontrarMayor() {
   function encontrarMaximo(a, b) {
      if (a > b) {
         return a;
      } else {
         return b;
      }
   }
   let numero1 = 10;
   let numero2 = 7;
   let maximo = encontrarMaximo(numero1, numero2);
   alert(`El numero mayor entre, ${numero1}, y ${numero2}, es: ${maximo}`)
   console.log("El número mayor entre", numero1, "y", numero2, "es:", maximo);
}

//Tarea
/* Crear una funcion que reciba 3 parametros, a, b y c.
Debe sumar a + b yel resultado restarlo por c.
Devolver el valor final y mostrar con un alert. */

//Tarea resuelta

function operaciones(a, b, c) {
   return a + b - c;
}
function mostrarResultado() {
   let num1 = parseInt(prompt("Ingrese el primer numero"));
   let num2 = parseInt(prompt("Ingrese el segundo numero"));
   let num3 = parseInt(prompt("Ingrese el tercer numero"));
   let resultado = operaciones(num1, num2, num3)
   alert(`La operacion de ${num1} + ${num2} - ${num3} = ${resultado}`)
}

/*
crear una funcion que reciba un parametro y permita a traves de un
bucle contar hasta este.
Ej: Se recibe el número 5 y muestra: 1 - 2 - 3 - 4 - 5
Ingresar una condicion para que el numero agregado no supere los 100
*/

function contarNumeros() {
   let fin = parseInt(prompt("Ingrese un número"));
   for (let i = 1; i <= fin; i++) {
      numero.push(i);
      let contar = numero.join(" - ");
      alert(contar);
   } 
   }