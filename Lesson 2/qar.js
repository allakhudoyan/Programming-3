class Qar extends KendaniEak{
    constructor(x, y, index){
        super(x, y, index);
        this.moveTact = 0;
    }
    
    texapokhvel(){
        this.moveTact++;
        if(this.moveTact >= 30){
            matrix[this.y][this.x] = 0;
            this.x = Math.floor(random(matrix[0].length));
            this.y = Math.floor(random(matrix.length));
            matrix[this.y][this.x] = this.index;
            this.moveTact = 0;

            if (matrix[this.y][this.x] == 1) {
                for (var c in grassArr) {
                    if (this.x == grassArr[c].x && this.y == grassArr[c].y) {
                        grassArr.splice(c, 1);
                        break;
                    }
                } 
            } else if (matrix[this.y][this.x] == 2) {
                for (var c in xotakernerArr) {
                    if (this.x == xotakernerArr[c].x && this.y == xotakernerArr[c].y) {
                        xotakernerArr.splice(c, 1);
                        break;
                    }
                } 
            } else if (matrix[this.y][this.x] == 3) {
                for (var c in gishatichnerArr) {
                    if (this.x == gishatichnerArr[c].x && this.y == gishatichnerArr[c].y) {
                        gishatichnerArr.splice(c, 1);
                        break;
                    }
                } 
            }else if (matrix[this.y][this.x] == 4) {
                for (var c in amenakernerArr) {
                    if (this.x == amenakernerArr[c].x && this.y == amenakernerArr[c].y) {
                        amenakernerArr.splice(c, 1);
                        break;
                    }
                } 
            }else if (matrix[this.y][this.x] == 6) {
                for (var c in qarArr) {
                    if (this.x == qarArr[c].x && this.y == qarArr[c].y) {
                        qarArr.splice(c, 1);
                        break;
                    }
                } 
            }
        }
    }
}