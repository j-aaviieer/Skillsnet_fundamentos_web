let boton = document.getElementById("iniciarSesion");

// Agregamos un evento 'click' al botón
boton.addEventListener("click", function () {
    let textoBoton = boton.textContent;
    if(textoBoton == "Iniciar sesión"){
        this.innerText = "Cerrar sesión";
    } else {
        this.innerText = "Iniciar sesión";
    }
});

// Selección de elementos
const tarjeta = document.getElementById("tarjeta"); // Selecciona el contenedor div
const textoTarjeta = document.getElementById("text");
const imagenTarjeta = document.querySelector(".campo-img");

// Evento al pasar el mouse sobre CUALQUIER parte de la tarjeta
tarjeta.addEventListener("mouseover", function () {
   textoTarjeta.textContent = "Noche estrellada sobre el ródano, Vincent van Gogh (1888)";
   imagenTarjeta.src = "static/images/noche-estrellada-sobre-el-ródano.png";
});

// Evento al salir del área de la tarjeta
tarjeta.addEventListener("mouseout", function () {
   textoTarjeta.textContent = "Campo de trigo con cipreses, Vincent van Gogh (1889)";
   imagenTarjeta.src = "static/images/campo-de-trigo-con-cipreses.png";
});