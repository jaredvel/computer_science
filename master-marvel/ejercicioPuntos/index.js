const number = 10;
const number_two = number;

//number_two = 10;
console.log("number", number);
console.log("number_two", number_two);


const student = {id: 1, name: "jose", app: "montoya"};
//const array = [100, 90, 110, 101, 12, 70];
const student2 = {...student};
student2.name = "Ruben";
console.log("student", student);
console.log("student2", student2);

const array = [100, 90, 110, 101, 12, 70];
//const array2 = array;
//
//for (let i=0; i< array.length; i++) {
//  array2.push(array[i]);
//} 
const array2 = [ ...array ];
array2[0] = 99;
console.log("array: ", array);
