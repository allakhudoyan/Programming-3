class Xotaker extends KendaniEak {
    constructor(){
        super();
        this.tariq = 0;
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
   yntrelVandak(ch) {
       this.stanalNorKordinatner();
       return super.yntrelVandak(ch);
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
