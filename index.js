// crea una calculadora 
const prompt =  require ('prompt-sync')();

const num1 = Number (prompt ( 'Ingresa una numero: '));
const num2 = Number (prompt ( 'Ingresa otro numero: '));

const operacion = prompt ('ingrese una operacion ( + , - , / , *  :)');

const suma = num1 + num2;
const resta = num1 - num2;
const division = num1 / num2;
const multiplicacion = num1 * num2;

if (operacion == ('+')){
    console.log ( 'Este es su resultado', suma)

}
else if (operacion == ('-')){
    console.log ( 'Este es su resultado', resta)

}
else 

if (operacion == ('/')){
    console.log ( 'Este es su resultado', division)

}
else if (operacion == ('*')){
    console.log ( 'Este es su resultado', multiplicacion)

}
