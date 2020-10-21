//     __
//    _|==|_  
//     ('')___/
// >--(`^^')
//   (`^'^'`)
//   `======'  
//
// King of the Iceberg

// DOM QUERIES
let body = document.querySelector('body');
let devStats = document.querySelector('#dev-stats')
let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');
context.font = '10px monospace';
context.strokeStyle = 'rgba(102, 129, 22, .7)'

//STANDARD UNITS: the canvas is 24 'units' tall and 32 'units' wide.
const unit = 32; //pixels

//LEVEL
let levelOne =["01","01","01","01","01","01","01","01","01","01","01","01","01","01","01","01", "01","01","01","01","01","01","01","01","01","01","01","01","01","01",
"01","01","01", "01","01","01","01","01","01","01","01","01","01","01","01","01","01","01","01","01", "01","01","01","01","01","01","01","01","01","01","01","01","01",
"01","01","01","01","01", "01","01","01","02","02","01","01","01","02","02","01","01","01","01","02","02","01","01", "01","02","02","01","01","01","01","01","01","01",
"01","01","01","01","01","01","01","01", "01","01","01","01","01","01","01","01","01","01","01","01","01","01","01","01","01","01", "01","01","01","01","01","01","01",
"01","01", "01", "01", "01", "01", "01", "01", "02", "02", "02", "01", "01", "01", "01", "01", "01", "01", "01", "02", "02", "02", "01", "01", "01", "01", "01", "01",
 "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01",
  "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01",
   "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01",
    "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "02", "02", "02", "02", "02", "02",
     "02", "02", "01", "01", "02", "02", "02", "02", "02", "02", "02", "02", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01",
      "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01",
       "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01",
        "01", "01", "02", "02", "02", "02", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01",
         "01", "01", "01", "02", "02", "02", "02", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01",
          "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01",
           "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01",
            "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01",
             "01", "02", "02", "02", "02", "01", "01", "01", "02", "02", "02", "02", "02", "02", "02", "02", "01", "01", "01", "02", "02", "02", "02", "01", "01", "01",
              "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01",
               "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01",
                "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01",
                 "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "02", "02", "02", "02", "01", "01",
                  "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "02", "02", "02", "02",
                   "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01",
                    "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01",
                     "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01",
                      "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "01", "02", "02", "02", "02", "02", "02",
                       "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02",
                        "02"
]

//AUDIO ASSETS
let iceClinkSound = new Audio("audios/iceClink.mp3");
let theme = new Audio("audios/theme.wav");

//IMAGE ASSETS
let playerImage = new Image();
playerImage.src = "images/player.png";
let monsterImage = new Image();
monsterImage.src = "images/monster.png";
let iceBlockImage = new Image();
iceBlockImage.src = "images/iceBlock.png";
let bkgImage = new Image();
bkgImage.src = "images/background.png";
let snowballImage = new Image();
snowballImage.src = "images/snowball.png";

//FUNCTIONS
function devStatUpdate() {

    devStats.innerHTML = `Player X: ${Math.round(player.x)} <br>Player Y: ${Math.round(player.y)} <br>Player XVelocity: ${Math.round(player.velocityX)} <br>Player YVelocity: ${Math.round(player.velocityY)} <br>Player Standing: ${player.canJump}
              <br>Player LastX: ${Math.round(player.lastX)} <br>Player Lasty: ${Math.round(player.lastY)} <br>Player Facing: ${player.facing} <br>Player Health: ${player.hp}`;
}

function controller(e) {
    if (e.type == "keydown") {
        switch (e.code) {
            case 'ArrowUp': player.upPressed = true;        break;
            //case 'ArrowDown': player.downPressed = true;    break;
            case 'ArrowLeft': player.leftPressed = true;    break;
            case 'ArrowRight': player.rightPressed = true;  break;
            case 'ControlLeft': player.ctrlPressed = true;  break;
        }
    }
    else if (e.type == 'keyup') {
        switch (e.code) {
            case 'ArrowUp': player.upPressed = false;       break;
            //case 'ArrowDown': player.downPressed = false;   break;
            case 'ArrowLeft': player.leftPressed = false;   break;
            case 'ArrowRight': player.rightPressed = false; break;
            case 'ControlLeft': player.ctrlPressed = false;  break;
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
        this.friction = .01;

        this.entities = [];     //every monster and projectile, AND THE PLAYER!
        this.tiles = [];        //every square in the gameboard
        this.platforms = [];    //every square with a type of 2, aka ice tiles!

        this.width = 1024;
        this.height = 768;

        this.monsterTotal = 0;
    }

    update() {
        this.checkRemainingMonsters();
        //apply vector forces to all entities
        for (let i = 0; i < this.entities.length; i++) {
            this.applyCollisions(this.entities[i]);            
        }
    }

    checkRemainingMonsters() {
        var total = 0;
        for (let i = 0; i < this.entities.length; i++) {
            if (this.entities[i].name == 'monster') {
                if (this.entities[i].isAlive) {
                    total++;
                }
            }
            this.monsterTotal = total;
        }
    }

    addEntity(entity) {
        this.entities.push(entity);
    }

    despawnSnowball() {
        //if the last element is a snowball, despawn it
        if (this.entities[this.entities.length-1].name == 'snowball') {
            this.entities.pop();
        } 
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

    applyCollisions(entity) {

        //run the internalUpdate functions on all entities, updating their INTENDED velocities based on input
        entity.internalUpdate();

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

        //ALL NARROW SCOPE COLLISION BABY!!!
        for (let i = 0; i < this.platforms.length; i++) {
            if (entity.x > this.platforms[i].leftBorder && entity.x < this.platforms[i].rightBorder && entity.directionOfMovementY > 0)
                if (entity.y > this.platforms[i].topBorder && entity.y < (this.platforms[i].topBorder+32)) {
                    entity.y = this.platforms[i].topBorder;
                    entity.velocityY = 0;
                    entity.canJump = true;
                }
            else {entity.canJump = false;}
        }

        //Snowball vs Monster Collision! Reorg this to have if (snowball) first
        if (entity.name == 'snowball') {
            for (let i = 0; i < this.entities.length; i++) {
                if (this.entities[i].name == 'monster' && entity.x <= (this.entities[i].x + 16) && entity.x >= (this.entities[i].x - 16) 
                && entity.y <= (this.entities[i].y + 16) && entity.y >= (this.entities[i].y - 16)) 
                {
                    this.entities[i].isAlive = false;
                }           
            }
        }

        //ADD! Monster vs Player Collision
        if (entity.name == 'player') {
            for (let i = 0; i < this.entities.length; i++) {
                if (this.entities[i].name == 'monster' && entity.x <= (this.entities[i].x + 16) && entity.x >= (this.entities[i].x - 16) 
                && entity.y <= (this.entities[i].y + 16) && entity.y >= (this.entities[i].y - 16) && this.entities[i].isAlive) 
                {
                    entity.hp--;
                    if (entity.hp < 0) entity.hp = 0;
                }           
            }
        }
    }
}

class Player {
    constructor(name, image, x, y,) {
        this.name = name;
        this.image = image;

        this.x = x;
        this.y = y;
        this.sx = 0;
        this.sy = 0;
        this.facing = 'right'

        this.lastX = 0;
        this.lasyY = 0;

        this.velocityX = 0;
        this.velocityY = 0;
        this.speed = 1;
        this.jumpForce = 16;

        this.canJump = false;
        this.isAlive = true;
        this.hp = 15;
        this.fireCooldown = 0;
        
        //input booleans
        this.upPressed = false;
        this.downPressed = false;
        this.rightPressed = false;
        this.leftPressed = false;
    }

    internalUpdate(direction) {
        this.fireCooldown--;
        if (this.hp > 0) {
            if (this.rightPressed) {
                this.velocityX += this.speed;
                this.facing = 'right'
            }
            if (this.leftPressed) {
                this.velocityX -= this.speed;
                this.facing = 'left';
            }
            if (this.upPressed && this.canJump) {
                this.velocityY = this.jumpForce;
                iceClinkSound.play();
            }
            if (this.ctrlPressed) {
                this.fire();
            }
        }
        //Animation
        if (this.facing == 'left') {
            this.sx = 32;
            this.sy = 0;
        }
        else if (this.facing == 'right') {
            this.sx = 0;
            this.sy = 0;
        }
    }

    fire() {

        if (this.facing == 'left' && this.fireCooldown < 1) {
            let tempProjectile = new Projectile("snowball", snowballImage, this.x - 16, this.y, -12, 5, 15);
            world.addEntity(tempProjectile);
            this.fireCooldown = 15;
        }
        else if (this.facing == 'right' && this.fireCooldown < 1) {
            let tempProjectile = new Projectile("snowball", snowballImage, this.x + 16, this.y, 12, 5, 15);
            world.addEntity(tempProjectile);
            this.fireCooldown = 15;
        }
    }

    get directionOfMovementX() {return this.x - this.lastX}
    get directionOfMovementY() {return this.y - this.lastY}
}

class Monster {
    constructor(name, image, x, y, facing) {
        this.name = name;
        this.image = image;

        this.x = x;
        this.y = y;
        this.sx = 0;
        this.sy = 0;

        this.lastX = 0;
        this.lasyY = 0;

        this.velocityX = 0;
        this.velocityY = 0;
        this.facing = facing;

        this.speed = 1;
        this.jumpForce = 18;

        this.canJump = false;
        this.isAlive = true;

        this.decisionIncrementer = 0;
    }

    internalUpdate() {
        if (this.isAlive) {
            this.decisionIncrementer++;
            if(this.decisionIncrementer == 33) {
                this.velocityY = 9;
                this.decisionIncrementer = 0;
            }
        }

        //Animation
        if (this.facing == 'left') {
            this.sx = 32;
        }
        else if (this.facing == 'right') {
            this.sx = 0;
        }
        
        if (!this.isAlive) this.sx = 64;
    }

    get directionOfMovementX() {return this.x - this.lastX}
    get directionOfMovementY() {return this.y - this.lastY}
}

class Projectile {
    constructor(name, image, x, y, velocityX, velocityY, life) {
        this.name = name;
        this.image = image;

        this.x = x;
        this.y = y;
        this.sx = 0;
        this.sy = 0;

        this.lastX = 0;
        this.lasyY = 0;

        this.velocityX = velocityX;
        this.velocityY = velocityY;

        this.life = life;
    }

    internalUpdate() {
        this.life--;
        if (this.life < 0) world.despawnSnowball();
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
                context.font = '10px monospace';
                //context.fillText(`${(i*unit) + j}`,xBox + 4,yBox + 12);

                xBox += 32;
                mapIndex++;           
            }
            xBox = 0;
            yBox += 32;
        }
        //render entities (includes projectiles)
        for (let i = 0; i < world.entities.length; i++) {
            var tempEntity = world.entities[i];
            //context.drawImage(tempEntity.image, tempEntity.x, tempEntity.y, unit, unit)
            context.drawImage(tempEntity.image, tempEntity.sx, tempEntity.sy, unit, unit, tempEntity.x, tempEntity.y, unit, unit)             
        }

        //render HUD
        //Score
        context.fillStyle = 'white';
        context.font = '22px monospace';
        context.fillText(`Remaining: ${world.monsterTotal}`, 16, 32);
        if (world.monsterTotal == 0) {
            context.font = '36px monospace';
            context.fillText(`Y o u   W i n !`, 370, 400);
        }

        if (player.hp == 0) {
            context.font = '36px monospace';
            context.fillText(`TRY     AGAIN!`, 370, 400);
        }
        
        
        //Health
        context.fillStyle = '#dc5432';
        context.fillRect(765,16,player.hp * 16,16)

    }
}

//START:  ------------------------------------------------------
let world = new World('Earth');
let renderer = new Renderer('Rendie', levelOne);

world.loadLevel(levelOne);

//Add Player
let player = new Player('player', playerImage, 32, 700);
world.addEntity(player);

//Add 10 unique monsters (no 'for' loop unfortunately)
let monster1 = new Monster('monster', monsterImage, 400, 400, 'left');
world.addEntity(monster1);
let monster2 = new Monster('monster', monsterImage, 400, 200, 'right');
world.addEntity(monster2);
let monster3 = new Monster('monster', monsterImage, 580, 32, 'left');
world.addEntity(monster3);
let monster4 = new Monster('monster', monsterImage, 700, 32, 'right');
world.addEntity(monster4);
let monster5 = new Monster('monster', monsterImage, 1000, 300, 'left');
world.addEntity(monster5);
let monster6 = new Monster('monster', monsterImage, 1000, 600, 'right');
world.addEntity(monster6);
let monster7 = new Monster('monster', monsterImage, 32, 250, 'left');
world.addEntity(monster7);
let monster8 = new Monster('monster', monsterImage, 220, 32, 'right');
world.addEntity(monster8);

document.addEventListener('keydown', controller);
document.addEventListener('keyup', controller);

//UPDATE: ------------------------------------------------------
theme.play();
setInterval(gameLoop, 33); //33 delivers roughly 30fps. This is the only full-scoped function that is called!