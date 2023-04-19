const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];



//  1 ID IMPAR

const pizzasIdImpar = pizzas.filter ( (pizza) =>{
  return pizza.id %2 !== 0;
});

pizzasIdImpar.forEach((pizza) => {
  console.log(`La ${pizza.nombre} tiene id impar `);
});



//  2   MENOS DE $600

const precioMenorA = (precio) =>{
  return pizzas.some( (pizza) => {
    return pizza.precio < precio;
  })
    ? console.log(`Hay pizzas menores a $${precio}`)
 		: console.log(`No hay pizzas con precio menores a $${precio}`);
}

precioMenorA(600)



//  3   NOMBRE Y PRECIO PIZZAS 


pizzas.forEach((pizza) => {
  	console.log(`La ${pizza.nombre} cuesta $${pizza.precio}`
	);
});



// 4   INGREDIENTES

 const ingredientesPizzas = pizzas.filter((pizza) => {
    return pizza.nombre && pizza.ingredientes;
});

ingredientesPizzas.forEach((pizza) =>{
  console.log(`La ${pizza.nombre} tiene ${pizza.ingredientes}`);
});

 
//  pizzas.forEach( (pizza) =>{
//    console.log(`La ${pizza.nombre} tiene ${pizza.ingredientes}`);
//   });
