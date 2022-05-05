const harryPotter = {
    name: “Harry Potter”,
    species: “human”,
    gender: “male”,
    house: “Gryffindor”,
    dateOfBirth: “31-07-1980”,
    yearOfBirth: 1980,
    wizard: true,
    ancestry: “half-blood”,
    eyeColour:“green”,
    hairColour:“black”,
    wand : {
       wood: “holly”,
       core: “phoenix feather”,
       length: 11
    },
    patronus: “stag”,
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: “Daniel Radcliffe”,
    alternate_actors: [
      { name: “chris”, app: “evans”, age: 38, nationality: “usa” } ,
      { name: “natalie”, app: “portman”, age: 40, nationality: “usa” } ,
    ],
    alive: true,
    image: “http://hp-api.herokuapp.com/images/harry.jpg”,
    address: {
        street: “Private drive”,
        number: “4”,
        country: {
            suburb: “Little winging”,
            state: “Survey”,
            country: “Inglaterra”
        }
    }
};
// suburb
console.log(harryPotter.address.country.suburb);
// name del segundo actor alternativo
if(harryPotter && harryPotter.alternate_actors && harryPotter.alternate_actors[1]
    && harryPotter.alternate_actors[1].name) {
    console.log(harryPotter.alternate_actors[1].name);
}

if(harryPotter && harryPotter.alternate_actors?.length) {
    console.log(harryPotter.alternate_actors[1].name);
}