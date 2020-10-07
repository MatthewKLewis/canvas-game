// DOM QUERIES
let body = document.querySelector('body');
let devStats = document.querySelector('#dev-stats')
let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');

//LEVEL ARRAY
let levelOne = [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01,
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 02, 02, 02, 02, 02, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 02, 02, 02, 02, 02, 02, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02];

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
function devStatUpdate() {

    devStats.innerHTML = `Player Name: ${player.name} <br>Player HP: ${player.hp} <br><br>Player X: ${Math.round(player.x)} <br>Player Y: ${Math.round(player.y)} 
              <br>Player XVelocity: ${Math.round(player.velocityX)} <br>Player YVelocity: ${Math.round(player.velocityY)} <br>Player Standing: ${player.standing}`;
}

function controller(e) {
    if (e.type == "keydown") {
        switch (e.code) {
            case 'ArrowUp': player.upPressed = true;        break;
            case 'ArrowDown': player.downPressed = true;    break;
            case 'ArrowLeft': player.leftPressed = true;    break;
            case 'ArrowRight': player.rightPressed = true;  break;
        }
    }
    else if (e.type == 'keyup') {
        switch (e.code) {
            case 'ArrowUp': player.upPressed = false;       break;
            case 'ArrowDown': player.downPressed = false;   break;
            case 'ArrowLeft': player.leftPressed = false;   break;
            case 'ArrowRight': player.rightPressed = false; break;
        }
    }
}

function gameLoop(){

    //Update Dev Stats
    devStatUpdate();

    //Model
    world.update();

    //View
    renderer.render();

    //Controller
    //Inputs exist outside of the game state and render loop
}

//CLASSES
class World {
    constructor(name, width, height) {
        this.name = name;
        this.gravity = 1;
        this.friction = .2;
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

        //run the move functions on all entities, updating their velocities based on input
        entity.move();

        //apply gravity and update Y positions
        entity.velocityY -= this.gravity;
        entity.y -= entity.velocityY;

        //apply sideways forces to X positions
        entity.x += entity.velocityX;
        if (entity.velocityX > 0) entity.velocityX -= this.friction;
        if (entity.velocityX < 0) entity.velocityX += this.friction;

        //keep within border box
        if (entity.y > 700) {entity.y = 700; entity.velocityY = 0;}
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
        this.standing = false;
        
        //input booleans
        this.upPressed = false;
        this.downPressed = false;
        this.rightPressed = false;
        this.leftPressed = false;
    }

    move(direction) {
        if (this.rightPressed) this.velocityX += this.speed;
        if (this.leftPressed) this.velocityX -= this.speed;
        if (this.upPressed) this.velocityY = this.jumpForce;
        if (this.downPressed) console.log('crouch?');
    }

    jump() {
        this.velocityY = this.jumpForce;
        this.jumping = true;
    }
}

class Tile {
    constructor(x,y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

class Renderer {
    constructor(name, level) {
        this.name = name;
        this.level = level
    }

    render() {
        //render background
        let xBox = 0;
        let yBox = 0;
        let mapIndex = 0;
        for (let i = 0; i < 24; i++) {
            for (let j = 0; j < 32; j++) {
                if (levelOne[mapIndex] % 2 == 0) context.fillStyle = 'rgba(182, 209, 62, .7)'
                if (levelOne[mapIndex] % 2 == 1) context.fillStyle = 'rgba(162, 189, 42, .7)'
                context.fillRect(xBox, yBox, unit, unit);
                xBox += 32;
                mapIndex++;           
            }
            xBox = 0;
            yBox += 32;
        }
        //render entities
        
        //render player
        context.fillStyle = 'black'
        context.fillRect(player.x, player.y, unit, unit);

        //render SFX

    }
}

//START:  ------------------------------------------------------
let world = new World('Earth');
let renderer = new Renderer('Rendie', levelOne);
let player = new Player('Matt', playerImage, 32, 32, 10);
world.addEntity(player);

document.addEventListener('keydown', controller);
document.addEventListener('keyup', controller);

//UPDATE: ------------------------------------------------------
//gameLoop();
theme.play();
setInterval(gameLoop, 34); //one frame every 588 milliseconds, 1.7hz, 102 bpm, F Major 588!!!!!