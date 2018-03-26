var grassArr = [];
var xotakernerArr = [];
var gishatichnerArr = [];
var amenakernerArr = [];
var qarArr = [];
var mahArr = [];
var side = 30;
var matrix = [];
var exanakner = ['winter', 'spring', 'summer', 'autumn'];
var exanak = 'spring';
var ex = 0;
var xoteriQanak = 0;
var xotakerneriQanak = 0;
var gishatichneriQanak = 0;
var amenakerneriQanak = 0;
var qareriQanak = 0;

function setup(){
    for (var y = 0; y < 15; y++) {
        matrix[y] = [0];
        for (var x = 0; x < 15; x++) {
            matrix[y][x] = Math.floor(random(0, 6));
        }
    }

    frameRate(3);
    background('#acacac');
    createCanvas(matrix[0].length * side, matrix.length * side);

    for(var y = 0; y < matrix.length; ++y){
        for(var x = 0; x < matrix[y].length; ++x){
            if(matrix[y][x] == 1){
                xoteriQanak++;
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }else if(matrix[y][x] == 2){
                xotakerneriQanak++;
                var eater = new Xotaker(x, y, 2);
                xotakernerArr.push(eater);
            }else if (matrix[y][x] == 3) {
                gishatichneriQanak++;
                var gishatich = new Gishatich(x, y, 3);
                gishatichnerArr.push(gishatich);
            }else if(matrix[y][x] == 4){
                amenakerneriQanak++;
                var amenaker = new Amenaker(x, y, 4);
                amenakernerArr.push(amenaker);
            }else if(matrix[y][x] == 6){
                qareriQanak++;
                var qar = new Qar(x, y, 6);
                qarArr.push(qar);
            }
        }
    }
}   

var multiplyMah = 0;
var multiplyExanak = 0;

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
                if (x == amenakernerArr[c].x && y == amenakernerArr[c].y) {
                    amenakernerArr.splice(c, 1);
                    break;
                }
            } 
        }
        matrix[y][x] = 5;
        mahArr[0].spanel();
        mahArr = [];
        multiplyMah = 0;
    }

    multiplyExanak++;

    if(multiplyExanak >= 30){
        exanak = exanakner[ex];
        ex++;
        if(ex >= 4){
            ex = 0;
        }
        console.log(exanak);
        multiplyExanak = 0;
    }

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1 && exanak == 'winter') {
                fill('white');
                rect(x * side, y * side, side, side);
            }else if (matrix[y][x] == 1 && exanak == 'summer') {
                fill('green');
                rect(x * side, y * side, side, side);
            }else if (matrix[y][x] == 1 && exanak == 'spring') {
                fill('lightgreen');
                rect(x * side, y * side, side, side);
            }else if (matrix[y][x] == 1 && exanak == 'autumn') {
                fill('orange');
                rect(x * side, y * side, side, side);
            }else if(matrix[y][x] == 0) {
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
            }else if(matrix[y][x] == 6){
                fill('lightgrey');
                rect(side * x, side * y, side, side);
            }
        }    
    }

    if(exanak != 'winter'){
        for(var i in grassArr){
            grassArr[i].bazmanal();
        }
    }

    fill('black');
    textSize(32);
    text(exanak, 2, 30);

    for (var i in xotakernerArr) {
        xotakernerArr[i].stanalExanak(exanak);
        xotakernerArr[i].utel();
        xotakernerArr[i].bazmanal();
        xotakernerArr[i].mahanal();
    }

    for (var f in gishatichnerArr) {
        gishatichnerArr[f].utel();
        gishatichnerArr[f].bazmanal();
        gishatichnerArr[f].mahanal();
    }

    if(exanak != 'winter'){
        for(var x in amenakernerArr){
            amenakernerArr[x].utel();
        }
        if (exanak == 'spring') {
            amenakernerArr[x].bazmanal();
        }
    }

    for(var i in qarArr){
        qarArr[i].texapokhvel();
    }
}