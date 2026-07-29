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
function calcularOperacion() {
   function calcular(a, b, c) {
      let resultado = (a + b) - c;
   }
   let numero1 = parseInt(prompt("ingrese el numero 1"));
   let numero2 = parseInt(prompt("Ingrese el numero 2"));
   let numero3 = parseInt(prompt("Ingrese el numero 3"));
   let resultado = calcular(numero1, numero2, numero3);
   alert(`El resultaro de ${numero1}, ${numero2} menos ${numero3} es: ${resultado}`);
   return resultado;
}