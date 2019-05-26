var yyy = document.getElementById('canvas');
var context = yyy.getContext('2d');
autoSizeCanvas(yyy)

/****/

ListentotheMouse(yyy)

var Eraser = false
eraser.onclick = function(){
    Eraser = true
    actions.className = "actions x"
  }
brush.onclick = function(){
    Eraser = false
    actions.Classname = "actions"
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
function ListentotheMouse(canvas){
  function drawCircle(x,y,radius){
  context.beginPath()
  context.arc(x,y,radius,0,Math.PI*2);
  context.fill()
}
var using = false
var lastPoint = {x:undefined,y:undefined}
canvas.onmousedown = function(aaa){
 
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
function drawLine(x1,y1,x2,y2){
  context.beginPath();
  context.moveTo(x1,y1)
  context.lineWidth = 5
  context.lineTo(x2,y2)
  context.stroke()
  context.closePath()
}
}
