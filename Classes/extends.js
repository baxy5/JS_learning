class Media {
    constructor(info){
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(songData) {
        super(songData); // calls the parent class constructor
        this.artist = songData.artist; // add a new property for the existing 
    }
}

const mySong = new Song({
    artist: 'Queen',
    name: 'bohemian',
    publishDate: 1975
})

// Note: !!! (not clear) inside the constructors !!!

