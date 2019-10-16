var var_nums = [10,20,30,40];

console.log("Variables :");
for(let i=0; i<var_nums.length; i++){   //using let will limit the scope of the varable to the block
    console.log(var_nums[i]);
}


console.log("Constants :");

const nums = [100,200,300,400];
const newnums = [...nums, 500, 600, 700]; //ES6 - in place expansion

for(let i=0; i<nums.length; i++){   //using let will limit the scope of the varable to the block
    console.log(nums[i]);
}

console.log(newnums);