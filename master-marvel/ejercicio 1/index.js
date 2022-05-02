var NUMERO;
var FACTORIAL = 1;

NUMERO = prompt("Dame el numero del que quieres su factorial: ");
NUMERO = Math.trunc(NUMERO);

for (var i = 1; i <= NUMERO; i=i+1) {
    FACTORIAL = FACTORIAL * i;
}

document.write('<p>' + 'El factorial de ' + NUMERO + ' es ' + FACTORIAL + '</p>');
