//ES7 has Async/Await ---- replacement of ES6's Promise
async function add(a,b){            //Note async prefix... No need to explicitly return promise
    if(a <0 || b< 0)
        throw new Error('Invalid Numbers....');
    return a+b;
}

async function testadd(a, b){
    try{
        let res = await add(a, b);      // await - No need to use resolve Promise's then() 
        console.log(res);    
    } catch (exp) {
        console.log(exp.toString());
    }
}

testadd(10, 20);
testadd(-1, 20);
console.log('Hello Promise....')
console.log('Hello Promise....')
console.log('Hello Promise....')