const originalNumber = 8;
const originalObj = {
    color: 'red'
}

const changeIt = (num,obj) => {
    num = 7;
    obj.color = 'blue';
}

changeIt(originalNumber,originalObj);

console.log(originalNumber);
console.log(originalObj);
