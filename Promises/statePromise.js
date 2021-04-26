// States: pending, resolved, rejected

function Start(){
    setTimeout(()=> {
        console.log("Start!");
    }, 4000);
}

function Launch() {
    console.log("Rocket is ready to start!");
    setTimeout(()=> {
        console.log("3");
    }, 1000);
    
    setTimeout(()=> {
        console.log("2");
    }, 2000);

    setTimeout(()=> {
        console.log("1");
    }, 3000);

    setTimeout(()=> {
        console.log("Start!");
    }, 4000);
}

const feladat1 = new Promise((resolve, reject) => {

    const res = true;

    if(res) {
        resolve(Launch());
    } else {
        reject('The rocket is not be able to take off!');
    }
});

feladat1.then((message) => { // It is going to give an 'undefined' because there isn't return in the Launch() function: in that case ->
    console.log(message);    // we need only the .then() fully: feladat1.then().catch((error) => )....
}).catch((error) => {
    console.log(error); 
});

