const canvasTag = document.querySelector("canvas")
// basic settings for any kind of canvas, for retina screen
canvasTag.width = window.innerWidth * 2
canvasTag.height = window.innerHeight * 2

canvasTag.style.width = window.innerWidth + "px"
canvasTag.style.height = window.innerHeight + "px"

const context = canvasTag.getContext("2d")
context.scale(2, 2)

//hold and aim for the X, when we load/the cursor is not on the page - aimX = null
let aimX = null
let aimY = null
let currentX = null
let currentY = null


let i = 0
const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"].map(src => {
  const image = document.createElement("img")
  image.src = src
  return image
})

document.addEventListener("mousemove", function(event) {
  aimX = event.pageX
  aimY = event.pageY
  if (currentX === null){
    currentX = event.pageX
    currentY = event.pageY
  }
})

canvasTag.addEventListener("click", function(){
  i = i + 1
  if(i >= images.length){
     i = 0
     }
})

const draw = function (){
  if (currentX){
     if(images[i].complete) {
     context.drawImage(images[i], currentX - 200, currentY - 300, 400, 600)
     }
    currentX = currentX + (aimX - currentX) * 0.1
    currentY = currentY + (aimY - currentY) * 0.1
  }
  requestAnimationFrame(draw)
}

draw()








