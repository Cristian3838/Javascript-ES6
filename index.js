//Reccebe valor da função
function log(value) {
    console.log(value);
}

log("Testando java");

var log = function(value) {
    console.log(value);
}

log("Testando Java");


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



//Spread operator
const str = "Cristian";

function logArgs(...args) {
    console.log(args);
}

logArgs(...str);




//Construindo Arrays e concatenando
const arr = [1, 2, 3, 4, 5, 6];

function logArgs(...args) {
    console.log(args);
}
const arr2 = [...arr, 7, 8, 9];
const arr3 = [...arr2, 9, 10, 11, 12];

logArgs(arr3);


//Ultilizando o spread em objetos iteraveis
var obj = {
    test: 123
};
var obj2 = {
    ...obj,
    test2: "Iai"
};

var objMerged = {
    ...obj,
    ...obj2,
    test3: "Concatenndo com spread"
}

console.log(objMerged);


//Destructuring assignment

var [apple2, banana2, orange2, tomato2, [abacate2]] = ["apple", "banana", "orange", "tomato", ["abacate"]];
console.log(abacate2);

var obj = {
    name: "Cristian",
    props: {
        age: 26,
        favoriteColors: ["Red", "Orange"]
    }
};

var {
    props: { age: age2, favoriteColors: [color1, color2] }
} = obj;
console.log(age2, color1, color2);


//Generators

const uniqueId = Symbol("Testando java")
console.log(uniqueId);

const uniqueId2 = Symbol("Concatenando Java")
console.log(uniqueId, uniqueId2);

Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const [] = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();

while (true) {
    let { value, done } = it.next();

    if (done) {
        break;
    }
    console.log(value);
}

//O Destructing abaixo substitui o while
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;


const stringer = "Angular"
for (let value of stringer) {
    console.log(value);
}

const matriz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let value of matriz) {
    console.log(value);
}


const cascata = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length

                };
            }
        };
    }
};

for (let value of cascata) {
    console.log(value)
}

const casca = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length

                };
            }
        };
    }
};

const ite = casca[Symbol.iterator]();
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());


var amigo = {
    sum(a, b, c) {
        return a + b + c;
    }

};

console.log(amigo.sum(1000, 2, 3) + " Esta é minha idade");

function hello() {
    console.log("hello");
    console.log("Cristian");
    console.log("Jonas");

};

hello();


//pausa com Generator
function* hello() {
    console.log("hello");
    yield 1;
    console.log("Cristian");
    yield 2;
    console.log("Jonas");
    yield 4;
};

const se = hello();
console.log(se.next());
console.log(se.next());
console.log(se.next());
console.log(se.next());
hello();

//Promises

const doSomethingPromisse = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve("First data");
        }, 1000);
    });

const doOtherthingPromisse = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve("Second data");
        }, 1000);
    });

Promise.all([doSomethingPromisse(), doOtherthingPromisse()]).then(data => {
    console.log(data)
});

//Fetch
fetch('/launch.json').then(responseStream => {
    responseStream.json().then(launch => {
        console.log(launch)
    })


});