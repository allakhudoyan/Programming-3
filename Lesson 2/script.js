var grassArr = [];
var xotakernerArr = [];
var gishatichnerArr = [];
var amenakernerArr = [];
var mahArr = [];
var side = 30;
var matrix = [];

function setup(){
    for (var y = 0; y < 15; y++) {
        matrix[y] = [0];
        for (var x = 0; x < 15; x++) {
            matrix[y][x] = Math.floor(random(0, 5));
        }
    }

    frameRate(3);
    background('#acacac');
    createCanvas(matrix[0].length * side, matrix.length * side);

    for(var y = 0; y < matrix.length; ++y){
        for(var x = 0; x < matrix[y].length; ++x){
            if(matrix[y][x] == 1){
               var gr = new Grass(x, y, 1);
               grassArr.push(gr);
            }else if(matrix[y][x] == 2){
                var eater = new Xotaker(x, y, 2);
                xotakernerArr.push(eater);
            }else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y, 3);
                gishatichnerArr.push(gishatich);
            }else if(matrix[y][x] == 4){
                var amenaker = new Amenaker(x, y, 4);
                amenakernerArr.push(amenaker);
            }
        }
    }
}   

var multiplyMah = 0;

function draw(){
    multiplyMah++;

    if (multiplyMah >= 10) {
        var x = Math.floor(random(matrix[0].length));
        var y = Math.floor(random(matrix.length));
        var norMah = new Mah(x, y);
        mahArr.push(norMah);
        if (matrix[y][x] == 1) {
            for (var c in grassArr) {
                if (x == grassArr[c].x && y == grassArr[c].y) {
                    grassArr.splice(c, 1);
                    break;
                }
            } 
        } else if (matrix[y][x] == 2) {
            for (var c in xotakernerArr) {
                if (x == xotakernerArr[c].x && y == xotakernerArr[c].y) {
                    xotakernerArr.splice(c, 1);
                    break;
                }
            } 
        } else if (matrix[y][x] == 3) {
            for (var c in gishatichnerArr) {
                if (x == gishatichnerArr[c].x && y == gishatichnerArr[c].y) {
                    gishatichnerArr.splice(c, 1);
                    break;
                }
            } 
        }else if (matrix[y][x] == 4) {
            for (var c in amenakernerArr) {
                if (x == gishatichnerArr[c].x && y == amenakernerArr[c].y) {
                    amenakernerArr.splice(c, 1);
                    break;
                }
            } 
        }
        matrix[y][x] = 5;
        mahArr[0].spanel();
        console.log('spanec');
        mahArr = [];
        multiplyMah = 0;
    }

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('green');
                rect(x * side, y * side, side, side);
            } else if(matrix[y][x] == 0) {
                fill('#acacac');
                rect(x * side, y * side, side, side);
            } else if(matrix[y][x] == 2){
                fill('yellow');
                rect(side * x, side * y, side, side);
            } else if (matrix[y][x] == 3) {
                fill('red');
                rect(side * x, side * y, side, side);
            } else if (matrix[y][x] == 4) {
                fill('brown');
                rect(side * x, side * y, side, side);
            }else if(matrix[y][x] == 5){
                fill('black');
                rect(side * x, side * y, side, side);
            }
        }    
    }

    for(var i in grassArr){
        grassArr[i].bazmanal();
    }

    for (var i in xotakernerArr) {
        xotakernerArr[i].utel();
        xotakernerArr[i].bazmanal();
        xotakernerArr[i].mahanal();
    }

    for (var f in gishatichnerArr) {
        gishatichnerArr[f].utel();
        gishatichnerArr[f].bazmanal();
        gishatichnerArr[f].mahanal();
    }

    for(var x in amenakernerArr){
        amenakernerArr[x].utel();
    }
}