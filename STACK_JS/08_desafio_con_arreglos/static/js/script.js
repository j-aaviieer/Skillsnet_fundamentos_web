function filtrarJuegos() {
    let videojuegos = [
        { nombre: "Minecraft", edadRecomendada: 7 },
        { nombre: "FIFA 23", edadRecomendada: 3 },
        { nombre: "Call of Duty", edadRecomendada: 18 },
        { nombre: "Fortnite", edadRecomendada: 12 },
    ];
    let edadMinima = 12;
    let recomendados = [];
    let valor1 = parseInt(prompt("Ingrese su Edad"));
    videojuegos.push(valor1);
    for (let i = 0; i < videojuegos.length; i++) {
        if (videojuegos[i].edadRecomendada <= edadMinima) {
        recomendados.push(videojuegos[i].nombre);
        }
    }
    alert(`${recomendados}`);
}

function cancionesFavoritas() {
let historialReproduccion = [
  "Shallow",
  "Blinding Lights",
  "Shallow",
  "Anti-Hero",
  "Shallow",
  "Bad Habits",
];
let cancionBuscada = "Shallow";
let contador = 0;
for (let i = 0; i < historialReproduccion.length; i++) {
  if (historialReproduccion[i] === cancionBuscada) {
    contador++;
  }
}
alert(`La canción ${cancionBuscada} se reprodujo ${contador} veces.`)
console.log("La canción", cancionBuscada, "se reprodujo", contador, "veces.");
}

function organizacionTorneo() {
let jugadores = [
  "Luis",
  " Andrea",
  " Carlos",
  " Sofía",
  " Pedro",
  " Martina",
  " Javier",
  " Valentina",
];
let tamanoGrupo = 3;
let grupos = [];
let grupoActual = [];
for (let i = 0; i < jugadores.length; i++) {
  grupoActual.push(jugadores[i]);
  if (grupoActual.length === tamanoGrupo || i === jugadores.length - 1) {
    grupos.push(grupoActual);
    grupoActual = [];
  }
}
alert(`Grupos formados: ${grupos.join(' / ')}`)
console.log("Grupos formados: ", grupos);
}

function listaEspera() {
let filaClientes = ["María", "José", "Fernanda", "Diego", "Valeria", "Samuel"];
let cantidadAtendidos = 3;
let atendidos = [];

for (let i = 0; i < cantidadAtendidos; i++) {
  atendidos.push(filaClientes[i]);
}

filaClientes = filaClientes.slice(cantidadAtendidos);

console.log("Clientes atendidos: ", atendidos);
console.log("Clientes en espera: ", filaClientes);
}