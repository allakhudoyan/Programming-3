var socket = io.connect('http://localhost:3000/');

var matrix = [];

function mouseDragged() {
    frameRate(200);
    matrix.push([windowWidth, windowHeight]);
    socket.emit("send coords", [mouseX, mouseY]);
}

function setup(){
    createCanvas(500, 500);
    background('lightgrey');
}

function draw(){
    for(var i in matrix){
        fill('blue');
        ellipse(matrix[i][0], matrix[i][1], 20, 20);
    }
}