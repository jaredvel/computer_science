//El spread operator se puede para recibir un conjunto de parámetros, con ello lo
//convierte a un array y en este se le llama rest operator
const operar = (operador, ...args) => {
    console.log(args);
    if (operador === "+") {
      //sentence suma
      result = args.reduce((previousValue, currentValue) => previousValue + currentValue) ;
    } else if (operador === "-") {
      //sentence suma
      result = args.reduce((previousValue, currentValue) => previousValue - currentValue) ;
    };
    console.log("resultado: " + result);
  } 
  
    
  operar("+", 50, 50, 50, 10);
  operar("-", 50, 50, 50, 10);
  