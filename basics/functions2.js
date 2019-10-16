function nestedFunction(n){
    return function(x) {
        return n*x;
    }
}

console.log(nestedFunction(10)); //returns [Function]

console.log(nestedFunction(10)(2)); //20 - calls the actual nested function

let fun = nestedFunction(20);
let res = fun(10);
console.log(res);       //200