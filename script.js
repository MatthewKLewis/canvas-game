// DOM QUERIES
let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');

//STANDARD UNITS: the canvas is 24 'units' tall and 32 'units' wide.
const unit = 32; //pixels
const theme = new Audio('audios/theme.mp3');

//SAMPLE ASSETS
let sampleImage = new Image();
sampleImage.src = "sample path";

//CLASSES
class Entity {
    constructor(name, image, x, y){
        this.name = name.toLowerCase();
        this.image = image;
        this.x = x;
        this.y = y;
    }

    toString() {
        return this.name;
    }

    setImage(img) {
        this.image = img;
    }

}

class Player extends Entity {
    constructor(name, image, x, y, hp, role) {
        super(name, image, x, y)
        this.hp = hp
        this.role = role
    }

    move(e) {
        switch(e.code) {
            case 'KeyW': console.log("Moving Up"); break;
            case 'KeyA': console.log("Moving Left"); break;
            case 'KeyS': console.log("Moving Down"); break;
            case 'KeyD': console.log("Moving Right"); break;
        }
    }
}

function draw(){
    //BACKGROUND
    //context.drawImage(background, 0,0);

    //MONSTERS

    //PLAYER
    //context.drawImage(player.image, player.x, player.y);

    //EFFECTS

}

//Start:
//theme.play();
let player = new Player('Matt', sampleImage, 32, 32, 10, 'Fighter')
document.addEventListener('keydown', player.move);

//Update:
setInterval(draw, 100);