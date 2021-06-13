var hue = Math.floor(Math.random() * 360);

setInterval(changeColor, 33);

function changeColor() {
    document.getElementById("body").style.backgroundColor="hsl(" + String(parseInt(hue % 360)) + ",33%,15%)";
    hue += 1;

}