var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

const obj = {x:20, y:20, t:100, s:1}

const mostra = () =>{
    ctx.clearRect(0, 0, 300, 150);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(obj.x, obj.y, obj.t, obj.t);
    obj.x += obj.s;
    if(obj.x + obj.t > 300 || obj.x < 0) obj.s *= -1
}

setInterval(mostra, 15);