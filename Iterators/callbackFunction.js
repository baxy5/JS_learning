function isEven(n) {
    return n % 2 == 0;
}

/*
Another way

const isEven = (n) => {
    return....
}

*/

let printMsg = (callbackFunc, num) => { 
    let isNumEven = callbackFunc(num); // true/false

    console.log("The number: " + num);
    console.log("Is even?: " + isNumEven);
}

printMsg(isEven,6);

// we have to give the callback function, and the 
// callback function's parameter inside the new function(printMsg)
