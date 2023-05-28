let logs = document.getElementById("log")
let index = 0
let lastIndex = -1
let images = ['player.png', 'playerShadow.png', 'background.png', 'foreground.png', 'spike.png', 'stars.png', 'moon.png', 'gameoverScreen.png', 'rocket.png', 'exhaust.png', 'mrEggmanRight.png']

let imageChecker
  
imageChecker = setInterval(()=>{
  let image = new Image()
  image.src = images[index]
  if(lastIndex != index){
    logs.innerHTML += ("checking " + (index+1) + " ...<br>")
  }
  if(lastIndex != index){
  lastIndex = index
  image.onload = function(){
    index+=1
    logs.innerHTML += (index + " is done <br>")
    if(index == images.length){
      logs.innerHTML += ("done <br>")
      whdfgydevjhfdqwzp()
    } 
  }
  }
},100)
function whdfgydevjhfdqwzp() {
logs.style.animation = 'hide 1s forwards ease-in'
  
clearInterval(imageChecker)
logs.innerHTML += ("running")  

let canvas = document.getElementById("canvas")
//canvas.height=300
let ctx = canvas.getContext("2d");
   
let DR = Math.PI/180
   
document.getElementById("title").innerHTML = "Dino"

let playerImg, playerShadow, background, foreground, spike, moon, stars, gameoverScreen, rocket, exhaust, mrEggman

let setImages = function() {
  playerImg = new Image()
  playerImg.src = 'player.png'
  playerShadow = new Image()
  playerShadow.src = 'playerShadow.png'
  background = new Image()
  background.src = 'background.png'
  foreground = new Image()
  foreground.src = 'foreground.png'
  spike = new Image()
  spike.src = 'spike.png'
  moon = new Image()
  moon.src = 'moon.png'
  stars = new Image()
  stars.src = 'stars.png'
  gameoverScreen = new Image()
  gameoverScreen.src = 'gameoverScreen.png'
  rocket = new Image()
  rocket.src = 'rocket.png'
  exhaust = new Image()
  exhaust.src = 'exhaust.png'
  mrEggmanRight = new Image()
  mrEggmanRight.src = 'mrEggmanRight.png'
}

setImages()

setTimeout(setImages(), 10000)

class particle {
  constructor(x, y, dir, speed, img, frames, size, delay){
    this.x = x
    this.y = y
    this.dir = dir
    this.speed = speed
    this.img = img
    this.frames = frames
    this.frame = 0
    this.size = size
    this.delay = delay
    this.time = 0
  }
  update(){
    this.x += Math.sin(this.dir)*this.speed
    this.x -= obstacleSpeed
    this.y += Math.cos(this.dir)*this.speed
    
    if(this.x < -30){
      return "remove"
    }
    
    this.speed *= 0.9
    this.dir+=(Math.random()*10-5)*DR
    
    this.time++
    /*if(this.frame == 0){
      this.time+=2
    }else if(this.frame == this.frames-1){
      this.time-=0.5
    }*/
    this.delay = 2*((this.frame)+1)+(Math.random()*20-10)
    if(this.time>this.delay){
      this.frame++
      this.time=0
    }
    
    let trueWidth = (this.img.width/this.frames)
    
    /*ctx.drawImage(this.img, trueWidth*this.frame, 0, trueWidth, this.img.height,   
this.x+((trueWidth)*this.size), this.y+((this.img.height)*this.size), (trueWidth)*this.size, (this.img.height)*this.size)*/
    ctx.drawImage(
  this.img,
  trueWidth * this.frame,
  0,
  trueWidth,
  this.img.height,
  this.x - ((trueWidth*this.size)/2),
  this.y - ((this.img.height*this.size)/2),
  trueWidth * this.size,
  this.img.height * this.size
);
    /*ctx.fillStyle = "white"
    ctx.fillRect(this.x, this.y, 10, 10)*/

    if(this.frame>this.frames){
      return "remove"
    }
  } 
}

class projectile {
  constructor(x, y, s, aH){
    this.x = x
    this.y = y
    this.acc = 0.1
    this.dir = 0
    this.desiredDir = 0
    this.speed = 0
    this.life = 180
    this.img = rocket
    this.s = s
    this.partDelay
    this.time = 0
    this.on = false
    this.activationHeight = aH
  }
  update(){
    this.life -= 1
    if(this.life<0){
      return "remove"
    }
    this.time++
    this.partDelay = 8/(this.speed*1.5) 
    if(this.partDelay<this.time && this.on && particles.length<maxParts){
    particles.push(new particle(this.x-Math.sin(90*DR)*((this.img.width*this.s)/2), this.y-Math.cos(90*DR)*((this.img.width*this.s)/2), (90*DR)+(Math.random()*2-1)*DR, -this.speed*2+(Math.random()*20-10), exhaust, 9, 0.7, 5))
    this.time = 0
    }
    this.speed += this.acc
    this.x += Math.sin(this.dir) * this.speed
    this.y += Math.cos(this.dir) * this.speed
    this.dir += (this.desiredDir-this.dir)/10
    this.desiredDir += Math.sin((uniFCount*4))*DR
    if(this.y > currentFloor - this.activationHeight && !this.on){
      this.on = true
      //this.dir = 70*DR
      //this.speed /= 2
      this.desiredDir = 90*DR
    }
  }
  draw(){
    ctx.drawImage(this.img, this.x-((this.img.width*this.s)/2), this.y-((this.img.height*this.s)/2), this.img.width*this.s, this.img.height*this.s)
    ctx.drawImage(playerShadow, this.x-(this.img.width*0.55)/2, currentFloor-(this.img.height*0.5), this.img.width*0.5, this.img.height*0.5)
    //ctx.fillStyle = "white"
    //ctx.fillRect(this.x, currentFloor, 10, 10)
    
  }
  
}

class layer {
  constructor(v, img, x, y, s){
    this.x = x
    this.v = v
    this.img = img
    this.s = s
    this.y = (canvas.height - this.img.height*(canvas.height/this.img.height)*this.s)+y

  }
  update(){
    this.x -= obstacleSpeed/this.v
    if(this.x+this.img.width*(canvas.height/this.img.height)*this.s<0){
      this.x = 0
    }
    let v = (canvas.height/this.img.height)
    ctx.drawImage(this.img, this.x, this.y, this.img.width*v*this.s, this.img.height*v*this.s)
    ctx.drawImage(this.img, this.x+this.img.width*v*this.s, this.y, this.img.width*v*this.s, this.img.height*v*this.s)
    if(this.img.width*v*this.s<canvas.width){
      ctx.drawImage(this.img, this.x+(this.img.width*v*this.s)*2, this.y, this.img.width*v*this.s, this.img.height*v*this.s)
    }
  }
}

class obstacle {
  constructor(x, type){
    this.x = x
    this.imgIndex = type
    this.img = obstacleTypes[this.imgIndex]
    this.imgW = this.img.width/obstacleSize
    this.imgH = this.img.height/obstacleSize
  }
  update(){
    this.x -= obstacleSpeed
    if(this.x+this.imgW<0){
      deadSus = 0
      //score += 1
      this.x = canvas.width+(Math.random()*500)
      this.imgIndex = Math.floor((Math.random()*obstacleTypes.length))
      //console.log(this.imgIndex)
      this.img = obstacleTypes[this.imgIndex]
      this.imgW = this.img.width/obstacleSize
      this.imgH = this.img.height/obstacleSize
    }
  }
  draw(){
  //let v = Math.random()*100
  //console.log(this.img)
  ctx.drawImage(this.img, this.x, currentFloor-this.imgH, this.imgW, this.imgH)
  }
}

let projectiles = []
//projectiles.push(new projectile(canvas.width/8, (canvas.height/8), 0.2, 100))
  
let particles = []
let maxParts = 200

let obstacleTypes = []
obstacleTypes.push(spike)

let backgroundLayer = new layer(2, background, 0, 15, 0.8)
let foregroundLayer = new layer(1, foreground, 0, 0, 1)

let score = 0
let deadSus = 0

let obstacles = []
let obstacleSpeed = 5
let obstacleSize = 5
obstacles.push(new obstacle(canvas.width * 3,0))

canvas.width*=2
canvas.height*=2

let uniFCount = 0

let floor = (canvas.height / 6)*5
let currentFloor = floor

let playerJumpForce = 7
let playerIsOnGround = true
let playerWidth = playerImg.width
let playerHeight = playerImg.height
let playerIndex = 0
let playerDelay = 6
let playerDelayV = 0
let playerX = canvas.width / 4
let playerY = currentFloor-playerHeight
let playerYSpeed = 0

let gameover = false

function gameLoop(){
  obstacleSpeed = 5 + score/200
  playerYSpeed += 0.25
  score+=0.1
  playerY += playerYSpeed
  currentFloor+=(floor-currentFloor)*1.5
  if(playerY+playerHeight>currentFloor){
    playerY = currentFloor-playerHeight
    
    if(!playerIsOnGround){
      playerIsOnGround = true
    }
    
    //playerYSpeed *= -0.9
    currentFloor+=playerYSpeed/5
    playerYSpeed = 0
    if(playerDelay<playerDelayV){
      playerIndex=(playerIndex+1)%6
      playerDelayV=0
      //console.log(uniFCount)
    }
  
    //playerYSpeed = 0
  }
  for(let i = 0;i<projectiles.length;i++){
    if(projectiles[i].update() === "remove"){
      projectiles.splice(i,1)
      i--
      
    }
  }
  for(let i = 0;i<obstacles.length;i++){
    let obj = obstacles[i]
    obj.update()
    //console.log(obj.imgW)
    if(playerY+playerHeight>currentFloor-obj.imgH && playerX+(32*5/2)>obj.x && playerX<obj.x+obj.imgW){
      deadSus += 1
      if(deadSus > 8){
      deadSus = 0
      score = 0
      gameover = true
      //console.log("ur ded")
      }
    }
  }
  if(uniFCount==0){
    projectiles.push(new projectile(canvas.width/8, (canvas.height/3), 0.2, 90+(Math.random()*20-10)))
  }
  
  draw()
  playerDelayV++
  ctx.fillText(Math.floor(score*1000)/1000, canvas.width/2, 10)
  uniFCount = (uniFCount+1)%360
  requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)

canvas.addEventListener("click", (e)=>{
  e.preventDefault
    
  if(playerIsOnGround/*playerY+playerHeight>currentFloor-10*/){
    playerYSpeed -= playerJumpForce
    playerIndex = 2
    playerIsOnGround = false
  }
})

function draw() {
  ctx.clearRect(0,0,canvas.width, canvas.height)
  ctx.drawImage(stars, 0, 0, canvas.width, canvas.height)
  ctx.drawImage(moon, (canvas.width/2)-((moon.width/4)/2), 0, moon.width/4, moon.height/4)
  backgroundLayer.update()
  foregroundLayer.update()
  ctx.drawImage(playerImg, playerIndex*(32*5), 0, (32*5), (32*5), playerX, playerY+(32*5)/2, (playerWidth/6)/2, playerHeight/2)
  if(playerIsOnGround){
  ctx.drawImage(playerShadow, playerX, playerY+(32*5)/2, (playerWidth/6)/2, playerHeight/2)
  }
  
  for(let i = 0;i<particles.length;i++){
    if(particles[i].update() == "remove"){
      particles.splice(i, 1)
      i--
    }
  }
  
  for(let i = 0;i<projectiles.length;i++){
    projectiles[i].draw()
  }
  
  ctx.drawImage(mrEggmanRight, 0, 0-Math.sin((uniFCount*5)*DR)*2, 150, 150)
  
  for(let i = 0;i<obstacles.length;i++){
    obstacles[i].draw()
  }
  
  if(gameover){
  ctx.drawImage(gameoverScreen, 0, 0, canvas.width, canvas.height)
  }
  
  /*ctx.fillStyle = "white"
  ctx.fillRect(canvas.width/8, (canvas.height/8),10,10)*/
  
}


}
