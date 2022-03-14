// Explanation of callback function
function explain_callback(name, age, task) {
    console.log(name);
    console.log(age);
    task();
    
}

function dinner_time() {
    console.log("It's dinner time");
    
}

function bed_time() {
    console.log("Now go to bed");
}

function get_up () {
    console.log("It's the time to wake up");
}

explain_callback("Sumona", 23, dinner_time);
explain_callback("Rahim", 10, bed_time);
explain_callback("Julia", 22, get_up);
