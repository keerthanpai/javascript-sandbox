//Convert an array of strings to upper case
function ucase(strarray){
    let p = new Promise((resolve, reject) => {
        let upperarray = [];
        for(let i=0; i<strarray.length; i++){
            upperarray.push(strarray[i].toUpperCase());
        }
        resolve(upperarray);
    });
    return p;
}

let inarray = ['hello','World'];
console.log("Input: " + inarray);


ucase(inarray).then((res) => {
    console.log("Output: " + res);});

//////////Using Map

let array = ['angular', 'React', 'Redux'];
let narray = array.map((ele) => {   //returns map
    return ele.toUpperCase();
});

console.log('Map narray : ' + narray);


//map for numbers

let ns = [1,2,3,4,5,6,7,8];

let sqns = ns.map((e) => {
    return e*e;
})
console.log('Map ns squared : ' + sqns);

//Map also takes index as 2nd element
let ns_index = ns.map((e, index) => {
    return e*index;
})
console.log('Map ns index : ' + ns_index);
