var a; // declarando la variable a
var b = b; //declarando y asignando
b = 'bb'; //redeclaracion de la variable b
var a = 'aaa';  //redeclaracion de a la variable a

// Global Scope -  accedemos a las variables globales desde donde querramos
var fruit = 'apple';

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Colombia';
    console.log(country);
}
countries();
console.log(country);