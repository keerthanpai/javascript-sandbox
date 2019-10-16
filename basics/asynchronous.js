//asyncronous

function add(x,y, callback){    //see third param

    setTimeout(function(){      //adding timeout to observe asynchronity
        let sum = x+y;
        callback(sum);    
    }, 3000);                   

}

add(10, 20, function(res){      //third arg is a function - callback 
    console.log(res);
});



//Using arrow functions
let square = (x, callback) => {   
    setTimeout( () => {      //adding timeout to observe asynchronity
        let squared = x*x
        callback(squared);    
    }, 1000);                   

}

square(10, res =>{
    console.log(res);
});

console.log('end of program...')
console.log('hello......');
console.log('hello......');
console.log('hello......');
console.log('hello......');
console.log('hello......');
console.log('hello......');


