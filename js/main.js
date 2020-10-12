// DOM QUERIES
let body = document.querySelector('body');
let devStats = document.querySelector('#dev-stats')
let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');
context.font = '10px monospace';
context.strokeStyle = 'rgba(102, 129, 22, .7)'

//LEVEL ARRAY   01 is a free space, 02 is a one-way platform, 03 is ???
let levelOne = [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01,
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 02, 02, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 02, 02, 02, 02, 02, 02, 02, 02, 02, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 02, 02, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 02, 02, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 02, 02, 02, 02, 02, 02, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 02, 02, 02, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 
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
let iceClinkSound = new Audio("audios/iceClink.mp3");

//IMAGE ASSETS
let playerImage = new Image();
playerImage.src = "images/player.png";

let monsterImage = new Image();
monsterImage.src = "images/player.png";

let iceBlockImage = new Image()
iceBlockImage.src = "images/iceBlock.png";

let bkgImage = new Image()
bkgImage.src = "images/background.png";

//FUNCTIONS
function devStatUpdate() {

    devStats.innerHTML = `-=CYBERPUNK 1983=-<br> Player Name: ${player.name} <br><br>Player X: ${Math.round(player.x)} <br>Player Y: ${Math.round(player.y)} 
              <br>Player XVelocity: ${Math.round(player.velocityX)} <br>Player YVelocity: ${Math.round(player.velocityY)} <br>Player Standing: ${player.canJump}
              <br>Player LastX: ${Math.round(player.lastX)} <br>Player Lasty: ${Math.round(player.lastY)}`;
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
        this.friction = .1;
        this.entities = [];
        this.tiles = [];        //every square in the gameboard
        this.platforms = [];    //every square with a type of 3, aka platforms!
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

    loadLevel(inputArray) { //for each item in levelOne, we create a tile and add it to the world.tiles array. (world.tiles[index].topBorder() would return the y height) )
        for (let i = 0; i < inputArray.length; i++) {

            var tempImage = '';
            if (inputArray[i] == 2) tempImage = iceBlockImage;
            else tempImage = bkgImage;

            var tempTile = new Tile((i % 32),Math.floor(i / unit),unit,unit, inputArray[i], tempImage);
            this.tiles.push(tempTile);
        }
        
        for (let i = 0; i < this.tiles.length; i++) {
            if (this.tiles[i].type == 2) this.platforms.push(this.tiles[i]);            
        }
    }

    applyVectorForces(entity) {

        //run the move functions on all entities, updating their velocities based on input
        entity.move();

        //apply gravity and update Y positions
        entity.velocityY -= this.gravity;
        entity.lastY = entity.y;
        entity.y -= entity.velocityY;

        //apply sideways forces to X positions
        entity.lastX = entity.x;
        entity.x += entity.velocityX;
        if (entity.velocityX > 0) entity.velocityX -= this.friction;
        if (entity.velocityX < 0) entity.velocityX += this.friction;
        if (entity.velocityX > -.2 && entity.velocityX < .2) entity.velocityX = 0; //kill low float drift

        //keep within border box
        if (entity.y > 704) {entity.y = 704; entity.velocityY = 0; entity.canJump = true;} else {entity.canJump = false;}
        if (entity.y < 0) {entity.y = 0; entity.velocityY = 0;}
        if (entity.x > 992) {entity.x = 992; entity.velocityX = (-entity.velocityX * .75);} //dampened wall bounce
        if (entity.x < 0) {entity.x = 0; entity.velocityX = (-entity.velocityX * .75);}

        //ALL NARROW SCOPE COLLISION BABY
        for (let i = 0; i < this.platforms.length; i++) {
            if (entity.x > this.platforms[i].leftBorder && entity.x < this.platforms[i].rightBorder && entity.directionOfMovementY > 0) //if an entity is in the right x position AND moving downwards
                if (entity.y > this.platforms[i].topBorder && entity.y < (this.platforms[i].topBorder+32)) {
                    entity.y = this.platforms[i].topBorder;
                    entity.velocityY = 0;
                    entity.canJump = true;
                }
            else {entity.canJump = false;}
        }

        //Add a entity vs entity collision?
        //forloop
    }
}

class Player {
    constructor(name, image, x, y,) {
        this.name = name;
        this.image = image;

        this.x = x;
        this.y = y;

        this.lastX = 0;
        this.lasyY = 0;

        this.velocityX = 0;
        this.velocityY = 0;
        this.speed = 1;

        this.jumpForce = 16;
        this.canJump = false;
        
        //input booleans
        this.upPressed = false;
        this.downPressed = false;
        this.rightPressed = false;
        this.leftPressed = false;
    }

    move(direction) {
        if (this.rightPressed) this.velocityX += this.speed;
        if (this.leftPressed) this.velocityX -= this.speed;
        if (this.upPressed && this.canJump) {
            this.velocityY = this.jumpForce;
            iceClinkSound.play();
        }
    }

    get directionOfMovementX() {return this.x - this.lastX}
    get directionOfMovementY() {return this.y - this.lastY}
}

class Monster {
    constructor(name, image, x, y, color) {
        this.name = name;
        this.image = image;

        this.x = x;
        this.y = y;

        this.lastX = 0;
        this.lasyY = 0;

        this.velocityX = 0;
        this.velocityY = 0;
        this.speed = 1;

        this.jumpForce = 18;
        this.canJump = false;

        this.decisionIncrementer = 0;
    }

    move() {
        this.decisionIncrementer++;
        if(this.decisionIncrementer == 33) {
            this.velocityY = 9;
            this.decisionIncrementer = 0;
        }
    }

    get directionOfMovementX() {return this.x - this.lastX}
    get directionOfMovementY() {return this.y - this.lastY}
}

class Tile {
    constructor(x,y, width, height, type, image) {
        this.x = (x-1)*unit;
        this.y = (y-1)*unit;
        this.width = width;
        this.height = height;
        this.type = type
        this.image = image;
    }

    get topBorder() {return this.y}
    get leftBorder() {return this.x} 
    get rightBorder() {return this.x + (this.width + unit) }
}

class Renderer {
    constructor(name, level) {
        this.name = name;
        this.level = level
    }

    render() {
        //render tiles
        let xBox = 0;
        let yBox = 0;
        let mapIndex = 0;
        for (let i = 0; i < 24; i++) {
            for (let j = 0; j < 32; j++) {
                //draw tiles
                context.drawImage(world.tiles[mapIndex].image, xBox, yBox, unit, unit)

                //Render Box Numbers
                //context.strokeRect(xBox, yBox, unit, unit);
                //context.fillStyle = 'darkgray';
                //context.fillText(`${(i*unit) + j}`,xBox + 4,yBox + 12);

                xBox += 32;
                mapIndex++;           
            }
            xBox = 0;
            yBox += 32;
        }
        //render entities
        for (let i = 0; i < world.entities.length; i++) {
            var tempEntity = world.entities[i];
            context.drawImage(tempEntity.image, tempEntity.x, tempEntity.y, unit, unit)            
        }
    }
}

//START:  ------------------------------------------------------
let world = new World('Earth');
let renderer = new Renderer('Rendie', levelOne);
let player = new Player('Matt', playerImage, 32, 32);
let monster = new Monster('Goblin', monsterImage, 400, 400);

world.addEntity(monster);
world.addEntity(player);
world.loadLevel(levelOne);

document.addEventListener('keydown', controller);
document.addEventListener('keyup', controller);

//UPDATE: ------------------------------------------------------

setInterval(gameLoop, 33);