const nombre =  prompt ("hola, como te llamas?");
let usuario = prompt ("nombre de usuario?");

console.log(nombre);
console.log(usuario);

console.log(`hola ${nombre}, tu nombre de usuario es ${usuario} `)


let num1=parseInt(prompt("numero 1"));
let num2=parseInt(prompt("numero 2"));

let suma=0; 
let resta=0;
let multiplicacion=0;
let division;
suma=num1+num2;
resta=num1-num2;
multiplicacion=num1*num2;
division=num1/num2;
    alert ("la suma es: "+suma+"  la resta es: "+resta+"  la multiplicacion de los numeros es: "+multiplicacion+"  la division es: "+division );

const edadUser =parseInt(prompt("que edad tienes: "+nombre))
if(edadUser>=18){
    alert("ya eres mayor de edad "+ usuario)
}else{
   alert ("aun no eres mayor de edad "+ usuario)
}
