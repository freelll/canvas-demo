var yyy = document.getElementById('canvas');
var context = yyy.getContext('2d');
var lineWidth = 5;
autoSizeCanvas(yyy)

/****/

ListentotheUser(yyy)

var Eraser = false
brush.onclick = function(){
  Eraser = false
  brush.classList.add('active')
  eraser.classList.remove('active')
}
eraser.onclick = function(){
  Eraser = true
  eraser.classList.add('active')
  brush.classList.remove('active')
}
red.onclick = function(){
  context.strokeStyle = 'red'
  red.classList.add('active')
  green.classList.remove('active')
  yellow.classList.remove('active')
}
green.onclick = function(){
  context.strokeStyle = 'green'
  green.classList.add('active')
  red.classList.remove('active')
  yellow.classList.remove('active')
}
yellow.onclick = function(){
  context.strokeStyle = 'yellow'
  yellow.classList.add('active')
  red.classList.remove('active')
  green.classList.remove('active')
}
thin.onclick = function(){
  lineWidth = 5
}
thick.onclick = function(){
  lineWidth = 10
}
clear.onclick = function(){
  context.clearRect(0,0,yyy.width,yyy.height)
}
save.onclick = function(){
  var url = yyy.toDataURL("image/png")
  var a = document.createElement('a')
  document.body.appendChild(a)
  a.href = url
  a.download = 'image'
  a.click()
}
function autoSizeCanvas(canvas){
  setCanvasSize()

  window.onresize = function(){
  setCanvasSize()
}
function setCanvasSize(){
   var pageWidth = document.documentElement.clientWidth
   var pageHeight = document.documentElement.clientHeight
   canvas.width = pageWidth
   canvas.height =pageHeight
}
}
function ListentotheUser(canvas){
var using = false
var lastPoint = {x:undefined,y:undefined}
function drawLine(x1,y1,x2,y2){
  context.beginPath();
  context.moveTo(x1,y1)
  context.lineWidth = lineWidth
  context.lineTo(x2,y2)
  context.stroke()
  context.closePath()
}
if(document.body.ontouchstart !== undefined){
  canvas.ontouchstart = function(aaa){
    var x = aaa.touches[0].clientX
    var y = aaa.touches[0].clientY
    using = true
    if(Eraser){
      context.clearRect(x-5,y-5,10,10)
    }else{ 
      lastPoint = {x:x,y:y}
    }
  }
  canvas.ontouchmove = function(aaa){
    var x = aaa.touches[0].clientX
    var y = aaa.touches[0].clientY
    if(!using){
      return
    }
   if(Eraser){
       context.clearRect(x-5,y-5,10,10)
   }else{
       var newPoint = {x:x,y:y}
       drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
       lastPoint = newPoint   
   }
  }
  canvas.ontouchend = function(){
    using = false
  }
}else{canvas.onmousedown = function(aaa){
 
  var x = aaa.clientX
  var y = aaa.clientY
  using = true
  if(Eraser){
    context.clearRect(x-5,y-5,10,10)
  }else{ 
    lastPoint = {x:x,y:y}
  }
}
canvas.onmousemove = function(aaa){
   var x = aaa.clientX
   var y = aaa.clientY
   if(!using){
     return
   }
  if(Eraser){
      context.clearRect(x-5,y-5,10,10)
  }else{
      var newPoint = {x:x,y:y}
      drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
      lastPoint = newPoint   
  }
}
canvas.onmouseup = function(){
  using = false
}
}
}



