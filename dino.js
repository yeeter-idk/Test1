let canvas = document.getElementById("canvas")
//canvas.width = canvas.width*3
//canvas.height = canvas.height*3
let ctx = canvas.getContext("2d");

let DR = Math.PI/180

let index = 0
let lastIndex = -1
let images = ['player.png', 'playerShadow.png', 'background.png', 'foreground.png', 'spike.png', 'stars.png', 'moon.png', 'gameoverScreen.png', 'rocket.png', 'exhaust.png', 'mrEggmanRight.png', 'resButton.png', 'cloud.png', 'mountain.png', 'farHouses.png', 'foregroundProp.png', 'unfocused.png']

let imageChecker
let level = 0
let bubbles = []
let bubblesSize = []
for(let i=0;i<10;i++){
  bubbles.push(Math.random()*canvas.width)
  bubbles.push(canvas.height+15)
  bubblesSize.push(Math.random()*4+3)
}
let dots = []
for(let i = 0;i<10;i++){
  dots.push(canvas.height+20)
}
let pa2ly
let loaded = false
pa2ly = new Image()
pa2ly.src = 'pa2ly.png'
pa2ly.onload = function(){
  loaded = true
}
  
imageChecker = setInterval(()=>{
  let image = new Image()
  image.src = images[index]
  if(lastIndex != index){
  lastIndex = index
  image.onload = function(){
    index+=1
    if(index == images.length){
      let ajdbujz = setTimeout(whdfgydevjhfdqwzp, 3000)
    } 
  }
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  if(loaded){
    ctx.drawImage(pa2ly, 0, 0, canvas.width, canvas.height)
  }
  /*ctx.fillStyle="#fff"
  ctx.fillText(index+"/"+images.length,10,10)*/
  ctx.fillStyle = "#27f"
  ctx.strokeStyle = "#aff"
  ctx.lineWidth = 5
  
  ctx.globalAlpha = 0.5
  ctx.beginPath()
  ctx.moveTo(-10, canvas.height-(level+=(((canvas.height/images.length)*index)-level)/15))
  for(let i = 0;i<dots.length;i++){
    dots[i]+=(((canvas.height-level)+(Math.random()*20-10))-dots[i])/10
    ctx.lineTo(
    (canvas.width/(dots.length-1))*i, 
    dots[i])
  }
  ctx.lineTo(canvas.width+10, canvas.height-(level+=(((canvas.height/images.length)*index)-level)/15))
  ctx.lineTo(canvas.width+10, canvas.height+10)
  ctx.lineTo(-10,canvas.height+10)
  ctx.fill()
  ctx.globalAlpha = 0.8
  ctx.stroke()
  
  ctx.lineWidth = 2
  
  ctx.beginPath()
  for(let i=0;i<bubbles.length;i+=2){
    bubbles[i] += Math.random()*2-1
    bubbles[i+1] -= 4
    if(bubbles[i+1]<(canvas.height-level)+20){
      for(let u = 0; u<3; u++){
        let d = (u*(360/3)*(Math.random()*5))*DR
        ctx.moveTo(bubbles[i]+Math.sin(d)*(bubblesSize[i/2]), bubbles[i+1]+Math.cos(d)*(bubblesSize[i/2]))
        ctx.lineTo(bubbles[i]+Math.sin(d)*(bubblesSize[i/2]*2), bubbles[i+1]+Math.cos(d)*(bubblesSize[i/2]*2))
      }
      //ctx.arc(bubbles[i], bubbles[i+1], bubblesSize[i/2]*1.5, 0, 2 * Math.PI);
      bubbles[i] = Math.random()*canvas.width
      bubbles[i+1] = canvas.height+15+(Math.random()*10)
    }
  }
  for(let i=0;i<bubbles.length;i+=2){
    ctx.moveTo(bubbles[i]+bubblesSize[i/2], bubbles[i+1])
    ctx.arc(bubbles[i], bubbles[i+1], bubblesSize[i/2], 0, 2 * Math.PI);
  }
  ctx.globalAlpha = 0.8
  ctx.stroke()
  ctx.globalAlpha = 1
  //ctx.fillRect(0, canvas.height-(level+=((((canvas.height-20)/images.length)*index)-level)/15), canvas.width, canvas.height)
},100)





function whdfgydevjhfdqwzp() {
//logArea.style.animation = 'hide 1s forwards ease-in'
  
clearInterval(imageChecker)
//logs.push("running")  
      
document.getElementById("title").innerHTML = "Dino"

let playerImg, playerShadow, background, foreground, spike, moon, stars, gameoverScreen, rocket, exhaust, mrEggmanRight, resButton, cloud, mountain, farHouses, foregroundProp, unfocused

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
  resButton = new Image()
  resButton.src = 'resButton.png'
  cloud = new Image()
  cloud.src = 'cloud.png'
  mountain = new Image()
  mountain.src = 'mountain.png'
  farHouses = new Image()
  farHouses.src = 'farHouses.png'
  foregroundProp = new Image()
  foregroundProp.src = 'foregroundProp.png'
  unfocused = new Image()
  unfocused.src = 'unfocused.png'
  
}

setImages()

let jsdjid = setTimeout(setImages, 5000)

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
    if(this.x+this.imgW<0 && obstaclesSpawn){
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
  //ctx.fillRect(this.x, currentFloor-(playerShadow.height/2), playerShadow.width, playerShadow.height/2)
  
  ctx.drawImage(playerShadow, this.x-91, currentFloor-(playerShadow.height/2)+5, playerShadow.width*1.5, playerShadow.height/2)
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
let cloudLayer = new layer(50, cloud, 0, -50, 0.8)
let mountainLayer = new layer(100, mountain, 0, 10, 0.8)
let farLayer = new layer(10, farHouses, 0, 20, 0.8)
let forePropLayer = new layer(1, foregroundProp, 0, -18.9, 1.5)
let unfocusedLayer = new layer(0.75, unfocused, 0, 0, 1)

let score = 0
let deadSus = 0

let obstacles = []
let obstacleSpeed = 5
let obstacleSize = 5
obstacles.push(new obstacle(canvas.width * 3,0))

let obstaclesSpawn = true

canvas.width*=2
canvas.height*=2

let uniFCount = 0

let floor = (canvas.height / 6)*5
let currentFloor = floor

let stage = 0

let eggX = -150
let eggY = 0

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

function restart() {
  projectiles = []
  
  particles = []

  score = 0
  deadSus = 0

  obstacles = []
  obstacles.push(new obstacle(canvas.width * 3,0))
  
  obstaclesSpawn = true

  uniFCount = 0

  playerIsOnGround = true
  playerY = currentFloor-playerHeight
  playerYSpeed = 0

  gameover = false
  
  stage = 0
  eggX = -150
  eggY = 0
  
  gameLoop()
  
  score = 0
}

function gameLoop(){
  stageUpdate(score, stage)
  obstacleSpeed = 5 + score/1000
  playerYSpeed += 0.25
  score+=0.5
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
      
      canvas.click()
      
      if(deadSus > 8){
        deadSus = 0
        gameover = true
        //let qjhsjsbs = setTimeout(restart, 1000)
        console.log(score)
        //console.log("ur ded")
      }
    }
    if(playerY+playerHeight>currentFloor-obj.imgH && playerX+(obstacleSpeed*20)+(32*5/2)>obj.x && playerX+(obstacleSpeed*20)<obj.x+obj.imgW){
      canvas.click()
    }
  }
  
  draw()
  playerDelayV++
  ctx.fillStyle = "#fcffff"
  ctx.font = "10px 'Press Start 2P'"
  ctx.fillText(Math.floor(score), canvas.width/2-(ctx.measureText(Math.floor(score)).width/2), 20)
  uniFCount = (uniFCount+1)%360
  if(!gameover){
    requestAnimationFrame(gameLoop)
  }
}

requestAnimationFrame(gameLoop)

canvas.addEventListener("click", (e)=>{
  e.preventDefault
    
  let can = canvas.getBoundingClientRect()
  let scaleX = canvas.width/can.width
  let scaleY = canvas.height/can.height
  let x = (e.clientX - can.left)*scaleX
  let y = (e.clientY - can.top)*scaleY
  
  if(playerIsOnGround){
    playerYSpeed -= playerJumpForce
    playerIndex = 2
    playerIsOnGround = false
  }
  if (
  (canvas.width/2)-((resButton.width/4)/2)<x &&
  (canvas.height/5)*3<y &&
  (canvas.width/2)-((resButton.width/4)/2)+resButton.width/4>x &&
  ((canvas.height/5)*3)+resButton.height/4>y &&
  gameover
  ) {
  //console.log("press");
  restart()
}

})

function draw() {
  ctx.clearRect(0,0,canvas.width, canvas.height)
  ctx.drawImage(stars, 0, 0, canvas.width, canvas.height)
  ctx.drawImage(moon, (canvas.width/2)-((moon.width/4)/2), 0, moon.width/4, moon.height/4)
  mountainLayer.update()
  cloudLayer.update()
  farLayer.update()
  backgroundLayer.update()
  foregroundLayer.update()
  forePropLayer.update()
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
  
  ctx.drawImage(mrEggmanRight, eggX+Math.sin((uniFCount*2)*DR)*3, eggY-Math.sin((uniFCount*5)*DR)*2, 150, 150)
  
  for(let i = 0;i<obstacles.length;i++){
    obstacles[i].draw()
  }
  
  unfocusedLayer.update()
  
  if(gameover){
    ctx.drawImage(gameoverScreen, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(resButton, (canvas.width/2)-((resButton.width/4)/2), (canvas.height/5)*3, resButton.width/4, resButton.height/4)
  }
  /*ctx.fillRect(((canvas.width/2)-((resButton.width/4)/2)),
   ((canvas.height/5)*3),resButton.width/4,
     resButton.height/4)
  //ctx.fillStyle = "white"
  ctx.fillRect(canvas.width/8, (canvas.height/8),10,10)*/
  /*ctx.fillRect(
    (canvas.width / 2) - ((resButton.width / 4) / 2),
    (canvas.height / 5) * 3,
    resButton.width / 4,
    resButton.height / 4
  );*/
  
}





function stageUpdate(){
  if(score>1000 && stage==0){
    stage = 1
    obstaclesSpawn = false
  }
  if(score>1500 && stage==1){
    stage = 2
  }
  if(score>1550 && obstaclesSpawn==false){
    obstaclesSpawn = true
  }
  
  if(stage==1){
    eggX += (0-eggX)/100
    if(uniFCount%180==0 && stage==1 && 50>0-eggX){
      projectiles.push(new projectile(canvas.width/8, (canvas.height/3), 0.2, 90+(Math.random()*20-10)))
    }
  }
  if(stage==2){
    eggX += (-150-eggX)/100
  }   
}
}
