let boton = document.getElementById("iniciarSesion");

// Agregamos un evento 'click' al botón
boton.addEventListener("click", function () {
    let textoBoton = boton.textContent;
    if(textoBoton == "Iniciar sesión"){
        // Cambia el texto del botón usando `this`
        this.innerText = "Cerrar sesión";
    } else {
        this.innerText = "Iniciar sesión";
    }
});

function verPerfil() {
    alert(`¡Bienvenido al Perfil!`)
}

let meGusta = document.querySelector(".likes");
let contador = 0;
meGusta.addEventListener("click", function () {
    contador++;
    this.textContent = `${contador} Me gusta`;
});