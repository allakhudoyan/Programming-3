class Grass{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.index = 1;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this,y + 1]
        ];
    }


    yntrelVandak(ch){
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
    }

    bazmanal(){
        var norVandak = random(this.yntrelVandak(0));

        if (norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
        }
    }
}

//...........................................................................

class Xotaker{
    constructor(x, y, index){
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 5;
        this.directions = [];
    }

    yntrelVandak(ch, ch1) {
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == ch || matrix[y][x] == ch1) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    stanalNorKordinatner(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    utel(){
        this.moveTact++;
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0, 1));

        if (vandak && matrix[vandak[1]][vandak[0]] == 1) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = this.index;

            for (var c in grassArr) {
                if (this.x == grassArr[c].x && this.y == grassArr[c].y) {
                    grassArr.splice(c, 1);
                    this.energy++;
                    break;
                } 
            }
        }else if(vandak && matrix[vandak[1]][vandak[0]] == 0){
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = this.index;
        }
    }

    bazmanal(){
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(1, 0));

        if(vandak && this.energy >= 8 && matrix[vandak[1]][vandak[0]] == 1){
            var norXotaker = new Xotaker(vandak[0], vandak[1], 2);
            xotakernerArr.push(norXotaker);
            matrix[vandak[1]][vandak[0]] = 2;
            this.energy = 5;
            for (var c in grassArr) {
                if (vandak[0] == grassArr[c].x && vandak[1] == grassArr[c].y) {
                    grassArr.splice(c, 1);
                    break;
                } 
            }
        }else if(vandak && this.energy >= 8 && matrix[vandak[1]][vandak[0]] == 0){
            var norXotaker = new Xotaker(vandak[0], vandak[1], 2);
            xotakernerArr.push(norXotaker);
            matrix[vandak[1]][vandak[0]] = 2;
            this.energy = 5;
        }
    }

    mahanal(){
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var d in xotakernerArr){
                if (this.x == xotakernerArr[d].x && this.y == xotakernerArr[d].y) {
                    xotakernerArr.splice(d, 1);
                    break;
                }
            }
        }
    }
}

//...........................................................................

class Gishatich {
    constructor(x, y, index){
        this.x = x;
        this.y = y;
        this.energy = 30;
        this.index = index;
        this.moveTact = 0;
        this.directions = [];
    }

    yntrelVandak(ch, ch1, ch2) {
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == ch || matrix[y][x] == ch1 || matrix[y][x] == ch2) {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
    }

    stanalNorKordinatner(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    utel(){
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0, 1, 2));

        if (vandak && matrix[vandak[1]][vandak[0]] == 2) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = this.index;

            for (var c in xotakernerArr) {
                if (this.x == xotakernerArr[c].x && this.y == xotakernerArr[c].y) {
                    xotakernerArr.splice(c, 1);
                    this.energy++;
                    this.moveTact = 0;
                    break;
                } 
            }
        }else if(vandak && matrix[vandak[1]][vandak[0]] == 1){
            matrix[this.y][this.x] = 1;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = this.index;
            this.energy--;
        }else if (vandak && matrix[vandak[1]][vandak[0]] == 0) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = this.index;
            this.energy--;
        }
    }

    bazmanal(){
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0, 1, 2));

        if(vandak && this.energy >= 35){
            var norGishatich = new Gishatich(vandak[0], vandak[1], 3);
            gishatichnerArr.push(norGishatich);

            if (matrix[vandak[1]][vandak[0]] == 1) {
                for (var c in grassArr) {
                    if (vandak[0] == grassArr[c].x && vandak[1] == grassArr[c].y) {
                        grassArr.splice(c, 1);
                        break;
                    }
                }
            }else if(matrix[vandak[1]][vandak[0]] == 2){
                for (var c in xotakernerArr) {
                    if (vandak[0] == xotakernerArr[c].x && vandak[1] == xotakernerArr[c].y) {
                        xotakernerArr.splice(c, 1);
                        break;
                    }
                }
            }
            matrix[vandak[1]][vandak[0]] = 3;
            this.energy = 15;
        }
    }

    mahanal(){
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var s in gishatichnerArr){
                if (this.x == gishatichnerArr[s].x && this.y == gishatichnerArr[s].y) {
                    gishatichnerArr.splice(s, 1);
                    break;
                }
            }
        }
    }
}

//...........................................................................

class Mah {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this,y + 1]
        ];
    }

    spanel(){
        for (var i = 0; i < this.directions.length; i++) {
            var vandak = this.directions[i];
            if (vandak[0] >= 0 && vandak[0] < matrix[0].length && vandak[1] >= 0 && vandak[1] < matrix.length) {
                if (matrix[vandak[1]][vandak[0]] == 1) {
                    for (var c in grassArr) {
                        if (vandak[0] == grassArr[c].x && vandak[1] == grassArr[c].y) {
                            grassArr.splice(c, 1);
                            break;
                        } 
                    }
                }else if(matrix[vandak[1]][vandak[0]] == 2){
                    for (var c in xotakernerArr) {
                        if (vandak[0] == xotakernerArr[c].x && vandak[1] == xotakernerArr[c].y) {
                            xotakernerArr.splice(c, 1);
                            break;
                        } 
                    }
                }else if (matrix[vandak[1]][vandak[0]] == 3) {
                    for (var c in gishatichnerArr) {
                        if (vandak[0] == gishatichnerArr[c].x && vandak[1] == gishatichnerArr[c].y) {
                            gishatichnerArr.splice(c, 1);
                            break;
                        } 
                    }
                }else if (matrix[vandak[1]][vandak[0]] == 4) {
                    for (var c in amenakernerArr) {
                        if (vandak[0] == amenakernerArr[c].x && vandak[1] == amenakernerArr[c].y) {
                            amenakernerArr.splice(c, 1);
                            break;
                        } 
                    }
                }
                matrix[vandak[1]][vandak[0]] = 0;
            }
        }
        matrix[this.y][this.x] = 0;
    }
}

//...........................................................................

class Amenaker{
    constructor(x, y, index){
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 0;
        this.moveTact = 0;
        this.directions = [];
    }

    yntrelVandak(ch, ch1, ch2) {
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == ch || matrix[y][x] == ch1 || matrix[y][x] == ch2) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    stanalNorKordinatner(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    utel(){
        this.moveTact++;
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(1, 2, 3));
        if(vandak && this.moveTact >= 30){
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = this.index;

            if(matrix[this.y][this.x] == 1){
                for (var c in grassArr) {
                    if (this.x == grassArr[c].x && this.y == grassArr[c].y) {
                        grassArr.splice(c, 1);
                        this.energy++;
                        break;
                    } 
                }
            }else if(matrix[this.y][this.x] == 2){
                for (var c in xotakernerArr) {
                    if (this.x == xotakernerArr[c].x && this.y == xotakernerArr[c].y) {
                        xotakernerArr.splice(c, 1);
                        this.energy++;
                        break;
                    } 
                }
            }else if(matrix[this.y][this.x] == 3){
                for (var c in gishatichnerArr) {
                    if (this.x == gishatichnerArr[c].x && this.y == gishatichnerArr[c].y) {
                        gishatichnerArr.splice(c, 1);
                        this.energy++;
                        break;
                    } 
                }
            }
        }
    }

    mahanal(){
        if(this.energy < 0){
            matrix[this.y][this.x] = 0;
            for (var c in amenakernerArr) {
                if (this.x == amenakernerArr[c].x && this.y == amenakernerArr[c].y) {
                    amenakernerArr.splice(c, 1);
                    console.log('amenakery merav');
                    break;
                } 
            }
        }    
    }
}
