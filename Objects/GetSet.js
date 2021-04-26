const Spaceship = {
    color: 'grey',
    number: '23-32-32-11-2',
    location: 'Budapest',

    set color(newColor)
    {
        return this.newColor;
    }
}

console.log(Spaceship.color('blue'));