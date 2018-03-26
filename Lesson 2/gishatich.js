class Gishatich extends KendaniEak{
    constructor(x, y, index){
		super(x, y, index);
		this.directions = [];
        this.bazmanaluAragutyun;
        this.energy = 30;
	}

	yntrelVandak(ch, ch1, ch2, ch3, ch4){
		this.stanalNorKordinatner();
		return super.yntrelVandak(ch, ch1, ch2, ch3, ch4);
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

    stanalExanak(exanak){
        if (exanak == "spring") {
            this.bazmanaluAragutyun = 5;
        }else if(exanak == 'summer'){
            this.bazmanaluAragutyun = 12;
        }else if(exanak == "autumn"){
            this.bazmanaluAragutyun = 15;
        }
    }

    utel(){
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0, 1, 2, 0, 1));

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
        var vandak = random(this.yntrelVandak(0, 1, 2, 0, 1));

        if(vandak && this.energy >= this.bazmanaluAragutyun){
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
            this.energy = 8;
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