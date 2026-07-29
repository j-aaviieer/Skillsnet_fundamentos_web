console.log("conexion exitosa")

// 📋 Instrucciones 
// 👨‍🍳 Crea una función llamada pizzaOven que devuelva un objeto con las propiedades:

// corteza: tipo de corteza de la pizza.
// salsa: tipo de salsa utilizada.
// quesos: un arreglo con los tipos de queso que tiene la pizza.
// ingredientes: un arreglo con los ingredientes adicionales.
// 🍕 Usa la función para crear las siguientes pizzas:

// Una pizza “estilo Chicago” con corteza tradicional, salsa tradicional, mozzarella y los ingredientes pepperoni y salchicha.
// Una piza “lanzada a mano” con salsa marinara, mozzarella y feta, y los ingredientes champiñones, aceitunas y cebollas.
// Crea dos pizzas más con tus ingredientes favoritos.
// 💻 Muestra en consola los objetos de cada pizza creada.

function pizzaOven(corteza, salsa, queso, ingredientes){
    let pizza = {};
    pizza.corteza = corteza;
    pizza.salsa = salsa;
    pizza.queso = queso;
    pizza.ingredientes = ingredientes;
    return pizza;
}

let pizzaestilochicago = pizzaOven(
    "corteza tradicional",
    "salsa tradicional",
    "mozzarellla",
    ["pepperoni", "salchicha"],
)
let pizzalanzadaamano = pizzaOven(
    "corteza tradicional",
    "salsa marinara",
    ["mozzarella", "feta"],
    ["champiñones", "aceitunas", "cebollas"],
)
let pizzaNapolitana = pizzaOven(
    "estilo napolitano (borde alto e inflado)",
    "salsa de tomate San Marzano triturado",
    "mozzarella de búfala fresca",
    ["hojas de albahaca fresca", "aceite de oliva virgen extra", "sal"]
);
let pizzaRomana = pizzaOven(
    "estilo romano (muy delgada, plana y crujiente)",
    "salsa de tomate ligera con orégano",
    ["mozzarella de baja humedad", "pecorino romano rallado"],
    ["jamón prosciutto", "rúcula fresca", "lascas de parmesano"]
);
console.log(pizzaestilochicago);
console.log(`pizza estilo chicago:
    corteza: ${pizzaestilochicago.corteza}
    salsa: ${pizzaestilochicago.salsa}
    queso: ${pizzaestilochicago.queso}
    ingredientes: ${pizzaestilochicago.ingredientes.join(" - ")}`)

console.log(pizzalanzadaamano)
console.log(`pizza lanzada a mano:
    corteza: ${pizzalanzadaamano.corteza}
    salsa: ${pizzalanzadaamano.salsa}
    queso: ${pizzalanzadaamano.queso}
    ingredientes: ${pizzalanzadaamano.ingredientes.join(" - ")}`)

console.log(pizzaNapolitana);
console.log(`pizza Napolitana:
    corteza: ${pizzaNapolitana.corteza}
    salsa: ${pizzaNapolitana.salsa}
    queso: ${pizzaNapolitana.queso}
    ingredientes: ${pizzaNapolitana.ingredientes.join(" - ")}`);

console.log(pizzaRomana);
console.log(`pizza Romana:
    corteza: ${pizzaRomana.corteza}
    salsa: ${pizzaRomana.salsa}
    queso: ${pizzaRomana.queso}
    ingredientes: ${pizzaRomana.ingredientes.join(" - ")}`);