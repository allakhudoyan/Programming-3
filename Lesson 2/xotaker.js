class Xotaker extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.tariq = 0;
        this.bazmanaluAragutyun;
        this.zuyg;
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch, ch1, ch2, ch3, ch4) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch, ch1, ch2, ch3, ch4);
    }

    gtnelZuyg(){
        if (this.ser == 1) {
            this.zuyg = 0;
        }else{
            this.zuyg = 1;
        }
    }

    utel() {
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
        } else if (vandak && matrix[vandak[1]][vandak[0]] == 0) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = this.index;
        }
    }

    stanalExanak(exanak) {
        if (exanak == "spring") {
            this.bazmanaluAragutyun = 12;
        } else if (exanak == 'summer') {
            this.bazmanaluAragutyun = 15;
        } else if (exanak == "autumn") {
            this.bazmanaluAragutyun = 18;
        }
    }

    bazmanal() {
        this.gtnelZuyg();
        this.stanalNorKordinatner();
        var vandakZ = random(this.yntrelVandak(4));

        for(var i in xotakernerArr){
            if (vandakZ && vandakZ[0] == xotakernerArr[i].x && vandakZ[1] == xotakernerArr[i].y) {
                var zuygiIndex = i;
                console.log(zuygiIndex);
            }
        }
            
        if(vandakZ && xotakernerArr[zuygiIndex].ser == this.zuyg){
            var vandak = random(this.yntrelVandak(0, 1, 2, 3));
            var norXotaker = new Xotaker(vandak[0], vandak[1], 4);
            xotakernerArr.push(norXotaker);
            console.log('bazmacav');
            matrix[this.y][this.x] = 4;

            if(matrix[vandak[1]][vandak[0]] == 1){
                for (var c in grassArr) {
                    if (this.x == grassArr[c].x && this.y == grassArr[c].y) {
                        grassArr.splice(c, 1);
                        break;
                    } 
                }
            }
    }
    }

    mahanal() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var d in xotakernerArr) {
                if (this.x == xotakernerArr[d].x && this.y == xotakernerArr[d].y) {
                    xotakernerArr.splice(d, 1);
                    break;
                }
            }
        }
    }
}
