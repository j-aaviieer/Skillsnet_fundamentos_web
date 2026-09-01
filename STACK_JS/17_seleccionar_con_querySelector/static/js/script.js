let title = document.querySelector("#title");
console.log(title);
console.log(`El contenido del titulo es: ${title.textContent}`)

let parrafo = document.querySelector("p");
console.log(parrafo);

let logoImg = document.querySelector(".nav img");
console.log(logoImg);

let parrafoo = document.querySelector(".texto");
console.log(parrafo.textContent);

let boton = document.querySelector("#boton-inexistente");
console.log(boton);

if (boton !== null) {
   boton.textContent = "Nuevo Texto";
} else {
   console.log("El botón no existe.");
}

//Tarea:
/* Crear un boton y aplicar condicion al igual que ejemplo...
debe cambiar su texto al momento de hacerle click
debe activarse con un hover js cambiando el color del fondo
*/

let button = document.getElementById("button");

// Agregamos un evento 'click' al botón
button.addEventListener("click", function () {
    let textoBoton = button.textContent;
    if(textoBoton == "Presioname!"){
        this.innerText = "Me has presionado";
    } else {
        this.innerText = "Me has vuelto a presionar";
    }
});