//Instead of sending callback as third argument
//ES6 - This returns a Promise object for callbacks
//ES7 has Async/Await
function add(a,b){
    let p = new Promise((resolve, reject) => {
        if(a <0 || b< 0)
            reject('Invalid Numbers....')
        
        //if(a <0 || b< 0)
        // throw new Error('Invalid Numbers....')

        let sum = a+b;
        resolve(sum);
    });
    return p;
}

//Returns promise, it has a method called then.
add(10,20).then((res) => {
    console.log(res);
}).catch( (err) => {
    console.log(err);
});

add(-1,20).then((res) => {
    console.log(res);
}).catch( (err) => {
    console.log(err);
});


console.log('Hello Promise....')
console.log('Hello Promise....')
console.log('Hello Promise....')