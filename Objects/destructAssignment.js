const hajo = {
    uzemanyag : 'oil',
    number: '32-11-11',
    asd : 32
}

console.log(hajo.number);

const {uzemanyag,number,asd} = hajo;

console.log(number);


// destruction: we can leave the 'hajo' object (hajo.number)
// and use instead of just 'number'

const uzi = {uzemanyag};

console.log(uzi);

// as well we can create a new variable and save that property in it