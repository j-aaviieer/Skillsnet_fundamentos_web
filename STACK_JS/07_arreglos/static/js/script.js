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