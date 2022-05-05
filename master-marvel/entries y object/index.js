const superhero = {id: 1, name: "peter", app: "parker", alias: "spiderman"};

// Object => Objeto o entidad (excepción: si el objeto esta con mayúsculas es porque es un método estático)
// entries => método o funciones

console.log(Object.entries(superhero)); //nos devuelve un arreglo de arreglos de [key, value] de las propiedades de un objeto
console.log(Object.keys(superhero));
console.log(Object.values(superhero));

const superhero2 = Object.create(superhero);
superhero2.name = "pedro";

console.log(superhero.name, superhero2.name);