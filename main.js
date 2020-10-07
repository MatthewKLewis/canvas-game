// DOM QUERIES
let body = document.querySelector('body');
let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');

//STANDARD UNITS: the canvas is 24 'units' tall and 32 'units' wide.
const unit = 32; //pixels

//AUDIO ASSETS
const theme = new Audio('audios/theme.mp3');

//IMAGE ASSETS
let playerImage = new Image();
playerImage.src = "images/player.jpg";

let backgroundImage = new Image();
backgroundImage.src = "images/background.jpg";

//FUNCTIONS
function controller(e) {
    switch(e.code) {
    case 'KeyW':  player.jump(); break;
    case 'Space': player.jump(); break;
    case 'KeyA':  player.move('left'); break;
    case 'KeyD':  player.move('right'); break;
    }
}

//CLASSES
class World {
    constructor(name, width, height) {
        this.name = name;
        this.gravity = 1;
        this.friction = .1;
        this.entities = [];
        this.width = 1024;
        this.height = 768;
    }

    update() {
        //apply vector forces to all entities
        for (let i = 0; i < this.entities.length; i++) {
            this.applyVectorForces(this.entities[i]);            
        }

    }

    addEntity(entity) {
        this.entities.push(entity);
    }

    applyVectorForces(entity) {
        //apply gravity and update Y positions
        entity.velocityY -= this.gravity;
        entity.y -= entity.velocityY;

        //apply sideways forces to X positions
        entity.x += entity.velocityX;
        if (entity.velocityX > 0) entity.velocityX -= this.friction;
        if (entity.velocityX < 0) entity.velocityX += this.friction;

        //keep within border box
        if (entity.y > 700) entity.y = 700;
        if (entity.y < 0) entity.y = 0;
        if (entity.x > 980) entity.x = 980;
        if (entity.x < 0) entity.x = 0;
    }
}

class Player {
    constructor(name, image, x, y, hp) {
        this.name = name;
        this.hp = hp;
        this.image = image;

        this.x = x;
        this.y = y;

        this.velocityX = 0;
        this.velocityY = 0;
        this.speed = 1;

        this.jumpForce = 20;
        this.jumping = false;
    }

    move(direction) {
        if (direction == 'left') this.velocityX -= this.speed;
        if (direction == 'right') this.velocityX += this.speed;
    }

    jump() {
        this.velocityY = this.jumpForce;
        this.jumping = true;
    }
}

function gameLoop(){
    //Model
    world.update();

    //View
    //renderer.render();
    //draw background
    context.fillStyle = 'rgba(182, 209, 62, .7)';
    context.fillRect(0, 0, 1024, 732);
    context.fillStyle = 'black';
    context.fillRect(0, 732, 1024, 768);

    //draw player
    context.drawImage(player.image, player.x, player.y);

    //BPM Test
}

//Start:
let world = new World('Earth');
let player = new Player('Matt', playerImage, 32, 32, 10);
world.addEntity(player);

document.addEventListener('keydown', controller);
theme.play();

//let game = new Game();
//let renderer = new Renderer();
//let controller = new Controller();

//Update:
//gameLoop();
setInterval(gameLoop, 34); //one frame every 588 milliseconds, 1.7hz, 102 bpm, F Major 588!!!!!