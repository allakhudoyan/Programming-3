class Amenaker extends KendaniEak{
	constructor(x, y, index){
		super(x, y, index);
        this.directions = [];   
        this.moveTact = 0;
        this.zuyg;
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

    utel(){
        this.moveTact++;
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(1, 2, 3, 1, 2));
        if(vandak && this.moveTact >= 7){
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = this.index;

            if(matrix[this.y][this.x] == 1){
                for (var c in grassArr) {
                    if (this.x == grassArr[c].x && this.y == grassArr[c].y) {
                        grassArr.splice(c, 1);
                        break;
                    } 
                }
            }else if(matrix[this.y][this.x] == 2){
                for (var c in xotakernerArr) {
                    if (this.x == xotakernerArr[c].x && this.y == xotakernerArr[c].y) {
                        xotakernerArr.splice(c, 1);
                        break;
                    } 
                }
            }else if(matrix[this.y][this.x] == 3){
                for (var c in gishatichnerArr) {
                    if (this.x == gishatichnerArr[c].x && this.y == gishatichnerArr[c].y) {
                        gishatichnerArr.splice(c, 1);
                        break;
                    } 
                }
            }
        }
    }

    gtnelZuyg(){
        if (this.ser == 1) {
            this.zuyg = 0;
        }else{
            this.zuyg = 1;
        }
    }

    bazmanal(){
        this.gtnelZuyg();
        this.stanalNorKordinatner();
        var vandakZ = random(this.yntrelVandak(4));

        for(var i in amenakernerArr){
            if (vandakZ && vandakZ[0] == amenakernerArr[i].x && vandakZ[1] == amenakernerArr[i].y) {
                var zuygiIndex = i;
                console.log(zuygiIndex);
            }
        }
            
        if(vandakZ && amenakernerArr[zuygiIndex].ser == this.zuyg){
            var vandak = random(this.yntrelVandak(0, 1, 2, 3));
            var norAmenaker = new Amenaker(vandak[0], vandak[1], 4);
            amenakernerArr.push(norAmenaker);
            console.log('bazmacav');
            matrix[this.y][this.x] = 4;

            if(matrix[vandak[1]][vandak[0]] == 1){
                for (var c in grassArr) {
                    if (this.x == grassArr[c].x && this.y == grassArr[c].y) {
                        grassArr.splice(c, 1);
                        break;
                    } 
                }
            }else if(matrix[vandak[1]][vandak[0]] == 2){
                for (var c in xotakernerArr) {
                    if (this.x == xotakernerArr[c].x && this.y == xotakernerArr[c].y) {
                        xotakernerArr.splice(c, 1);
                        break;
                    } 
                }
            }else if(matrix[vandak[1]][vandak[0]] == 3){
                for (var c in gishatichnerArr) {
                if (this.x == gishatichnerArr[c].x && this.y == gishatichnerArr[c].y) {
                    gishatichnerArr.splice(c, 1);
                    break;
                } 
            }
        }
    }
    }
}