//Reccebe valor da função
function log(value) {
    console.log(value);
}

log("Testando java");


var log = function(value) {
    console.log(value);

}

log("Testando Java")


//Função de soma

var sun = function(a, b) {
    return a + b;
};

console.log(sun(5, 5));


//Arrow function

var sum = (a, b) => a + b;
console.log(sum(5, 100));


var createObj = () => ({ teste: 123 });
console.log(createObj());


function Car() {
    this.Objeto = "bar";
}
console.log(new Car());


//Arrow functions


var obj = {
    showContext: function showContext() {

        setTimeout(() => {
            this.log("After 1000ms");
        }, 1000);
    },


    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();

// Criando função de multiplicação


function multiply(a, b) {
    return a * b;
}
console.log(multiply(10, 20));

//Arrow function

var multiply = (a, b) => a * b;
console.log(multiply(10, 30));

//Para validar o  valor 0
function multiply(a, b = 1) {
    return a * b;

}
console.log(multiply(5, 0));

var multiply = (a, b = 1) => a * b;
console.log(multiply(5, 0));

//Função lazy evalluation

//Para gerar um numero Randômico

function randomNumber() {
    return Math.random() * 10;
}

function multiply(a, b = 1) {
    return a * b;
}


console.log(randomNumber());


//para textos
var obj = {
    prop1: "Digital Innovation One",
    prop2: "Upgrade"
};

//Para calculos
var obj = {
    sum: function sum(a, b) {
        return a + b;
    }
};

console.log(obj.sum(5, 7));


var obj = {
    sum(a, b) {
        return a + b;
    }
};
console.log(obj.sum(15, 17));

//Criando a variavel propName
var propName = "teste";
var obj = {
    [propName + " Concat"]: "prop value"
};

console.log(obj);

//Functio spread operator

function sum(...args) {
    console.log(arguments);
}
console.log(sum(5, 5, 5, 2, 3));

function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);

}
console.log(sum(5, 9, 5, 3, 3));


//Function Rest operator
function sum(...rest) {
    console.log(5, 9, rest);

};
console.log(sum(5, 9, 5, 3, 3));