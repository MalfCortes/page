var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

const obj = {x:20, y:20, t:100}

const mostra = () =>{
    ctx.clearRect(0, 0, 300, 150);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(obj.x, obj.y, obj.t, obj.t);
    obj.x++;
}

setInterval(mostra, 100);