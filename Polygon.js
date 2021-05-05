class Polygon {
    constructor(vertexNum=4,radius=100,x=0,y=0) {
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.vertexNum=vertexNum
    }

    render() {
        let angle = TWO_PI / this.vertexNum;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
            let sx = this.x + cos(a) * this.radius;
            let sy = this.y + sin(a) * this.radius;
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }
  
}