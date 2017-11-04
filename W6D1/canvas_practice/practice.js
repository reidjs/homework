document.addEventListener("DOMContentLoaded", function(){
  var canvas = document.getElementById("mycanvas");
  canvas.height = 500;
  canvas.width = 500;
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgb(200,0,0)';
  ctx.fillRect(0, 0, 100, 100);
  ctx.beginPath();
  ctx.arc(250,250,100,0,2*Math.PI);
  ctx.strokeStyle = 'rgb(0,200,0)';
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.fillStyle = 'rgb(200,0,200)';
  ctx.fill();
});
