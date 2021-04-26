const dogFactory = (name, age, breed) => {
    return {
        name: name,
        age: age,
        breed: breed,
        bark() {
            console.log('Woof!');
        }
    };
};

const Bolhi = dogFactory("Labrador", 16, "nemtom");

console.log(Bolhi.breed);