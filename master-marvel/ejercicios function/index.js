function suma(num1, num2){
    let result = num1 + num2;
    console.log("La suma es: " + result)
  }
  
  function resta(num1, num2){
    let result = num1 - num2;
    console.log("La resta es: " + result)
  }
  
  
  suma(5,4);
  resta(5,4);

  function cookPizza(ingredeintes){
    let pizza = "";
    pizza = "de peperonni";
    return pizza;
  }
  
  function deliver(address){
    console.log("Paquete entregado");
  }
  
  function arriveIsland(){
    let minutes = 0;
    while (minutes <= 10){
      console.log("Pasando tiempo", minutes);
      minutes++;
    }
  }
  
  const pizza = cookPizza();
  console.log(pizza);
  const entrega = deliver();
  console.log("entrega: " + entrega);
  arriveIsland();
  
  //cookPizza();
  //deliver();
  //arriveIsland();
  