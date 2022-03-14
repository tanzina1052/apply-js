// Arguments
// Arguments is an array like object

function addNumbers(num1, num2) {
    // console.log(arguments[2]);
    // let result = num1 + num2;
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    // [...arguments.push(19)];
    return sum;
}

let addResult = addNumbers(7, 5, 11, 13, 17);
console.log(addResult);