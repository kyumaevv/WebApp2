console.log("test.....");

var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.moveTo(90,50);
ctx.lineTo(210,10);
ctx.moveTo(190,10);
ctx.lineTo(300,50);
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.stroke();

ctx.fillStyle = 'rgb(200,50,10)';
ctx.fillRect(75,125,100);

ctx.strokeStyle = "green";
ctx.strokeRect(50,100,200,150);