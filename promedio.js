// Pedir 3 numeros y mostrar el promedio.

const prompt = require ('prompt-sync')();
const num1 = Number (prompt ('Ingresa tu primer numero detres para sacarles el promedio: '))
const num2 = Number (prompt ('Ingresa tu segundo numero: '))
const num3 = Number (prompt ('Ingresa tu tercer numero '))

const operacion = num1 + num2 + num3 ;
const resultado = operacion / 3

if (operacion = resultado)
{
    console.log ('Este es el porcentaje de tu numero', resultado)
}