const array1 = [];

for (let i = 0; i <= 50000; i++) {
    array1.push(i);
}


//for...
var forT0 = performance.now()

for (let element = 0; element < array1.length; element++) {
    console.log(element);
}

var forT1 = performance.now()
console.log("Call to doSomething took " + (forT1 - forT0) + " milliseconds.")



//for...in
var forInT0 = performance.now()

for (const element in array1) {
    console.log(element);
}

var forInT1 = performance.now()
console.log("Call to doSomething took " + (forInT1 - forInT0) + " milliseconds.")



//for...of
var forOfT0 = performance.now()

for (const element of array1) {
    console.log(element);
}


var forOfT1 = performance.now()
console.log("Call to doSomething took " + (forOfT1 - forOfT0) + " milliseconds.")


//forEach
var forEachT0 = performance.now()

array1.forEach(element => console.log(element));


var forEachT1 = performance.now()
console.log("Call to doSomething took " + (forEachT1 - forEachT0) + " milliseconds.")