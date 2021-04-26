class Dog {
    constructor(name) {
        this.name = name;
    }

    intorduce() {
        console.log('csa ' + this.name);
    }

    static bark()
    {
        console.log("ugat");
    }
}

const Bolhi = new Dog("bolhi");

Bolhi.intorduce();

Dog.bark(); // note: that we use the class name here because it is static method
// (general method)