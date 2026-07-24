console.log("conexion exitosa con js...")
function ejercicio1(){
let nombre1 = "Ana";
let nombre2 = "Pedro";
let nombre3 = "María";
let nombre4 = "Carlos";

let nombres = ["Ana","Pedro","María","Carlos"]
alert(`${nombres[2]}`)
}
function ejercicio2(){
let compras = [5000, 2300, 12000, 4500, 3000];
let alumnos = ["Ana", "Pedro", "María", "José"];
let datos = ["Carlos", 18, true];
let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];
//desafio: formar una oración con elementos de las distintas variables
let mensaje =`${alumnos[1]} quiere comprar 1kg de ${frutas[2]}, y pregunta si esta a ${compras[4]}$ y el vendedor dice ${datos[2]}`
alert(mensaje)
}
//La propiedad `.length` devuelve la cantidad de elementos.
let fruta = ["Manzana", "Pera", "Kiwi", "Sandía"];

console.log(fruta.length);
//obtener el ultimo elemento
let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];

let ultima = fruta[fruta.length - 1];
//variable.lenght - 1 siempre trae el ultimo elemento
console.log(ultima);

//desafio
//Del arreglo ["Hola","a","todos","los","programadores!"].
//Mostrar el penultimo elemento y el ultimo concatenado.
function ejercicio3(){
let algo = ["Hola","a","todos","los","programadores!"]
console.log(algo[algo.length - 2] + " " + algo[algo.length - 1])
}
let listaTareas = ["Barrer","Cocinar","Realizar compras"]
function manipulararreglo(listaTareas){
    //Modificar un elemento del arreglo
    listaTareas[1] = "Construir";
//añadir un elemento al final de la lista
listaTareas.push("Cocinar");
//eliminar el ultimo elemento y mostrarlo
let eliminado = listaTareas.pop()
//añadir un elemento al inicio de la lista
listaTareas.unshift("Boxear")
//eliminar el primer elemento de la lista
eliminado += listaTareas.shift();
//mostrar resultado
alert("Elementos eliminados: "+ eliminado);
}

//Recorrer un arreglo
function recorrerArreglo() {
    let notas = [6.2, 5.8, 4.1, 7.0, 3.0, 6.9];
    for(let i = 0; i < notas.length; i++) {
        alert(notas[i]);
    }
}

//Sumar elementos dentro de un bucle para obtener un total

function sumarElementos() {
    let ventas = [10000, 5000, 12000, 8000]; //Datos que el bucle sumara
    let total = 0; 
    for (let i = 0; i < ventas.length; i++) { 
        total  += ventas[i]; //"+=" Acumula
    }
    alert(`El total de todas las ventas es ${total}CLP.`);
}

//Calcular un promedio

function calcularPromedio() {
    let notas = [5.8, 6.2, 4.9, 6.5];
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    alert(`El promedio es ${suma}`);
    let promedio = suma / notas.length;
    alert(`El promedio de las notas es ${notas.join(' / ')} \npromedio: ${promedio}`);
}

//Condiciones dentro de un bucle

function buscarMayoresEdad() {
    let edades = [12, 13, 15, 16, 18, 20, 25, 29, 32, 45];
    let mayores = [];
    for (let i = 0; i < edades.length; i++) {
        //Condicion para poder buscarr a mayores de 18
        if (edades[i] >= 18) {
            mayores.push(edades[i]);
        }
    } alert(`De la lista de edades, ${edades.join(' / ')}. \nLos mayores de edad son: ${mayores.join(' / ')}. `);
}

//Ejemplo completo
//Tarea: Unir los console.log en una alerta
//Eliminar el ultimo valor y mostrarlo
//Añadir dos valores nuevos con .push (prompt)
//Contar cantidad de ventas mayores que $10.000

function calcularVentas() {
    let ventas = [5000, 8000, 12000, 3000, 10000, 9000, 4000];
    let total = 0;
    let mayores = [];
    let contadorVentas = 0;
    let mayor = ventas[0];
    let valorEliminado = ventas.pop();
    let valor1 = parseInt(prompt("Ingrese primer valor: "))
    let valor2 = parseInt(prompt("Ingrese segundo valor: "))
    ventas.push(valor1, valor2);
    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i];
        if (ventas[i] > mayor) {
            mayor = ventas[i];
            if(ventas[i] >= 10000) {
                mayores.push(ventas[i])
                contadorVentas++;
            }
        }
    }
    alert(`Total ventas: ${total} \nMayor: ${mayor} \nPromedio: ${total / ventas.length} \nValores sobres $10.000: ${mayores.join(' / ')} \nConteo de mayores: ${contadorVentas} ventas \nValor eliminado: ${valorEliminado}`)
    console.log("Mayor:", mayor);
    console.log("Promedio:", total / ventas.length);
}