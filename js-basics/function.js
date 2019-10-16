//ES6 use arrow function
//normal function 

let addNew = (x,y) => {
    return x+y;
}
console.log('Using arrow functions...')
console.log(add(10,20));

let addSingleLine = (x,y) => x+y;   //no need of return
console.log(addSingleLine(10,20));

let square = n => n*n;   //no need of return () for one argument
console.log(square(10));




console.log('Before arrow functions...')

function add(a=5,b=6){ 
    return a+b;
}

function print(...s){   //In place expansion operator - ES6+
    console.log(s);
}

console.log(add(10,20));
console.log(add());
console.log(add(b=100,a=10));

print(10,20,30);

