console.log("Conectado correctamente con JavaScript...");

// Ejercicio 1: Calculadora de Envío

// Enunciado

// Una empresa de despacho cobra el envío dependiendo del peso del paquete.

// Solicitar:

// - Nombre del cliente
// - Peso del paquete (kg)

// Condiciones:

// - Hasta 2 kg
// - Más de 2 kg y hasta 5 kg
// - Más de 5 kg y hasta 10 kg
// - Más de 10 kg

// El programa debe indicar:

// - Nombre del cliente
// - Categoría del envío
// - Valor correspondiente al despacho
function ejercicio1() {
    let nombreCliente = prompt("Ingresar el nombre del Cliente:");
    let pesoPaquete = parseInt(prompt("Ingresar el peso del Paquete:"));
    let Valor = 2000;
    let mensaje = "";
    if(pesoPaquete > 0 && pesoPaquete < 2) {
        mensaje =`El Paquete pesa menos de 2kg \nValor despacho: ${Valor * pesoPaquete}CLP`;
    }else if(pesoPaquete > 2 && pesoPaquete <= 5){
        mensaje =`El Paquete pesa ${pesoPaquete}kg \nValor despacho: ${Valor * pesoPaquete}CLP`
    }else if(pesoPaquete > 5 && pesoPaquete <= 10){
        mensaje =`ElPaquete pesa ${pesoPaquete}kg \nValor despacho: ${Valor * pesoPaquete}CLP`
    }else{
        mensaje ="¡Ingrese valores validos!"
    }
    alert(mensaje);
}

// Ejercicio 2: Acceso a Biblioteca

// Enunciado

// Una biblioteca posee dos tipos de usuarios:

// - Estudiante
// - Profesor

// Solicitar:

// - Tipo de usuario
// - Cantidad de libros solicitados

// Condiciones:

// Cada tipo de usuario posee un límite distinto de préstamos.

// El programa debe indicar:

// - Si el préstamo está permitido.
// - Si supera el límite permitido.
// - Mostrar un mensaje diferente según el tipo de usuario.

// Utilizar operadores lógicos para realizar las validaciones.

// ---

function ejercicio2(){
    let tipo_usuario = prompt("Ingresar el tipo de usuario");
    let cantidad_libros = parseInt(prompt("Ingresar cantidad de libros solicitados"));
    let message = "";
    if (tipo_usuario === "estudiante" && cantidad_libros > 0 && cantidad_libros <= 5){
        message = `el prestamo de libros esta permitido para el estudiante`}
        else if(tipo_usuario === "estudiante" && cantidad_libros > 5){
            message = `el prestamo de libros no esta permitido para el estudiante ya que supera el limite establecido de 5 libros`
        }else if (tipo_usuario === "profesor" && cantidad_libros > 0 && cantidad_libros <= 10){
        message = `el prestamo de libros esta permitido para el profesor`
    }else if(tipo_usuario === "profesor" && cantidad_libros > 10){
        message =`el prestamo de libros no esta permitido para el profesor ya que supera el limite establecido de 10 libros`
    }else{
        message =`ingrese un usuario o cantidad de libros validas`
    } 
    alert(message);
}

// Ejercicio 3: Clasificación Deportiva

// Enunciado

// Solicitar:

// - Nombre del participante
// - Edad

// Clasificar al participante según su edad.

// Debe existir al menos cuatro categorías distintas.

// Finalmente mostrar:

// - Nombre
// - Edad
// - Categoría asignada

// ---

function ejercicio3(){
    let nombre = prompt("Ingrese el nombre del participante");
    let edad = parseInt(prompt("Ingrese la edad del participante"));
    let MENSAJE = "";
    if (edad < 10 && edad > 0 ){
        MENSAJE =`el participante ${nombre} tiene ${edad} años por lo que se le ha asignado la categoria de niños`
    }else if (edad < 15 && edad > 10){
        MENSAJE =`el participante ${nombre} tiene ${edad} años por lo que se le ha asignado la categoria de pre-adolescentes`
    }else if (edad < 18 && edad > 15){
        MENSAJE =`el participante ${nombre} tiene ${edad} años por lo que se le ha asignado la categoria de adolescentes`
    }else if (edad < 25 && edad > 18){
        MENSAJE =`el participante ${nombre} tiene ${edad} años por lo que se le ha asignado la categoria de adultos`
    }
    alert(MENSAJE);
}

// Ejercicio 4: Sistema de Bonificación

// Enunciado

// Una empresa entrega bonos según los años trabajados.

// Solicitar:

// - Nombre del trabajador
// - Años de servicio

// Clasificar según distintos rangos de antigüedad.

// Mostrar:

// - Nombre
// - Nivel de antigüedad
// - Mensaje indicando si recibe o no bonificación.

// ---

function ejercicio4(){
    let = nombre_trabajador = prompt("ingrese el nombre del trabajador") ;
    let = años_servicio = parseInt(prompt("ingrese los años de servocio"));
    let MEnsaje = "";
    if (años_servicio > 0 && años_servicio < 5){
        MEnsaje = `El trabajador ${nombre_trabajador} es tu trabajador nuevo con ${años_servicio} años de servicio por lo que no recibe bonificacion en su salario`
    }else if(años_servicio > 5 && años_servicio < 10){
        MEnsaje =`El trabajador ${nombre_trabajador} es un trabajador que posee ${años_servicio} años de servicio por lo que recibira un 10% de bonificacion en su salario`
    }else if (años_servicio > 10){
        MEnsaje =`El trabajador ${nombre_trabajador} es un trabajador antiguo que posee ${años_servicio} años de servicio por lo que recibira un 20% de bonificacion en su salario`
    }
}

// Ejercicio 5: Evaluación de Velocidad

// Enunciado

// Solicitar:

// - Nombre del conductor
// - Velocidad registrada

// Condiciones:

// Clasificar la velocidad en distintos rangos.

// Además:

// Si supera un determinado límite, mostrar un mensaje indicando que ha excedido la velocidad permitida.

// Mostrar:

// - Nombre del conductor
// - Velocidad
// - Clasificación obtenida

// ---

function ejercicio5(){
    let nombreconductor = prompt("Ingrese el nombre del conductor");
    let velocidad = parseInt(prompt("Ingrese la velocidad"));
    let limitedevelocidad = 50
    let mensaje = "";
    if (velocidad > 0 && velocidad < 10){

    }
}

// Requisitos Técnicos

// Cada ejercicio debe cumplir con:

// - Una función independiente.
// - Uso de prompt().
// - Uso de alert().
// - Uso de variables.
// - Uso de if.
// - Uso de else if.
// - Uso de else.
// - Uso de operadores de comparación.
// - Uso de operadores lógicos cuando corresponda.

// ---

// Desafío Extra

// Agregar una o más de las siguientes mejoras:

// - Validación de campos vacíos.
// - Validación de datos numéricos.
// - Mostrar mensajes utilizando emojis.
// - Mostrar resultados dentro del HTML utilizando `innerHTML`.
// - Cambiar colores o estilos mediante JavaScript según el resultado obtenido.