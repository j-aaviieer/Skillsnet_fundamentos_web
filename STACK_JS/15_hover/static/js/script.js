const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
   console.log("El ratón está sobre el botón");
   boton.style.backgroundColor = "blue";
});

boton.addEventListener("mouseout", function () {
   console.log("El ratón ha salido del botón");
   boton.style.backgroundColor = "red";
});

//Tarea
/*
Crear dos botones con evento onmouseover y onmouseout

- Cambia el texto de un boton
- Cambiar el color del fondo y color de texto
*/

const textoBoton = document.getElementById("textButton");

textoBoton.addEventListener("mouseover", function () {
   console.log("El ratón está sobre el texto del botón");
   textoBoton.textContent = "¡Has cambiado el texto con JS!";
});

textoBoton.addEventListener("mouseout", function () {
   console.log("El Boton ha vuelto a la normalidad");
   textoBoton.textContent = "Pasa el cursor sobre mí";
});

const colorBoton = document.getElementById("colorButton");

colorBoton.addEventListener("mouseover", function () {
   console.log("El ratón está cambiando el color del fondo y del texto");
   colorBoton.style.backgroundColor = "blue";
   colorBoton.style.color = "red";
});

colorBoton.addEventListener("mouseout", function () {
   console.log("El Boton ha vuelto a la normalidad");
   colorBoton.style.backgroundColor = "red";
   colorBoton.style.color = "white";
});