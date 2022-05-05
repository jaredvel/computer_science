const array = ["apple", "banana", "orange", "tangerine"];

/*
let i = 0;
while (i < array.lenght) {
if (array [i] === "orange") {
console.log("hay naranjas para comer");
}
i++;
}
*/

/*if (array.includes("oranges")) {
  console.log("hay naranjas para comer");
} else {
  console.log("naranjas jaja xd");
}*/

array.includes("oranges")
? console.log("hay naranjas para comer")
: console.log("naranjas jaja xd")