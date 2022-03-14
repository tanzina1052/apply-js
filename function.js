// When to use Function
// for repeting work, function is useful

const nums = [5, 8, 9, 13, 16, 19, 20, 23];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num % 2 == 0) {
        console.log(num, "is an even number");
    } 
    else {
        console.log(num * 2, "is an odd number");
    }
}


const friendsAge = [15, 11, 17, 20, 21, 23, 24];
for (let i = 0; i < friendsAge.length; i++) {
    const age = friendsAge[i];
    if(age % 2 == 0) {
        console.log(age, "is an even number");
    }
    else {
        console.log(age, "is a odd number");
    }
}



function evenify(id) {
    if(id % 2 == 0) {
        console.log(id, "is an even number");
    }
    else {
        console.log(id, "is a odd number");
    }
}

const employeesId = [11, 13, 14, 15, 16, 17];
for (let i = 0; i < employeesId.length; i++) {
    const id = employeesId[i];
    evenify(id);
}

function isEven(nums) {

    for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num % 2 == 0) {
        console.log(num, "is an even number");
    } 
    else {
        console.log(num, "is an odd number");
    }
}
    
}

const numbers = [11, 13, 14, 15, 16, 23];
isEven(numbers);
