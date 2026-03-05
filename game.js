let player = document.getElementById("player")
let obstacle = document.getElementById("obstacle")

let coins = 0
let level = 1

document.getElementById("coins").innerText = coins

document.addEventListener("mousedown", jump)

function jump(){

if(!player.classList.contains("jump")){

player.classList.add("jump")

setTimeout(function(){
player.classList.remove("jump")
},400)

}

}

function startGame(){

document.getElementById("menu").style.display="none"
document.getElementById("game").style.display="block"

startLevel()

}

function startLevel(){

let speed = 2000 - level*150

moveObstacle(speed)

}

function moveObstacle(speed){

obstacle.style.right = "-30px"

let move = setInterval(function(){

let obstacleLeft = parseInt(obstacle.style.right)
obstacle.style.right = obstacleLeft + 5 + "px"

let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"))

if(obstacleLeft > 690 && obstacleLeft < 740 && playerTop < 40){

alert("Game Over")
location.reload()

}

if(obstacleLeft > 800){

coins++

document.getElementById("coins").innerText = coins

level++

if(level > 10){

alert("GANASTE EL JUEGO")
location.reload()

}

clearInterval(move)

startLevel()

}

},20)

}

function openShop(){

document.getElementById("menu").style.display="none"
document.getElementById("shop").style.display="block"

}

function closeShop(){

document.getElementById("shop").style.display="none"
document.getElementById("menu").style.display="block"

}

function buyColor(color, price){

if(coins >= price){

coins -= price
player.style.background = color
document.getElementById("coins").innerText = coins

alert("Comprado")

}else{

alert("No tienes suficientes monedas")

}

}
