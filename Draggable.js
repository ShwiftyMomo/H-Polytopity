class Polygon {
    
    constructor(vertexNum,radius) {

        //Radial length of polygon
        this.radius=radius;
        //Number of sides of polygon
        this.vertexNum=vertexNum;
        //Keeps track of if the shape is being dragged
        this.dragging = false;
        //Keeps track of if shape is being hovered over
        this.rollover = false;
        //Location x and y
        this.x = 100;
        this.y = 100;
        //Dimensions width and height
        this.w = 75;
        this.h = 50;
    }
  
    over() {
        let changed=false;

        let dist=(this.x-mouseX)**2+(this.y-mouseY)**2;
        if (dist<this.radius**2){
            this.rollover=true;
            changed=true;
        }
        if (!changed){
            this.rollover=false;
        }
    }
  
    update() {
  
        // Adjust location if being dragged
        if (this.dragging) {
        this.x = mouseX + this.offsetX;
        this.y = mouseY + this.offsetY;
        }
  
    }
  
    show() {
  
        stroke(0);
        // Different fill based on state
        if (this.dragging) {
        fill(50);
        } else if (this.rollover) {
        fill(100);
        } else {
        fill(175, 200);
        }

        let angle = TWO_PI / this.vertexNum;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
            let sx = this.x + cos(a) * this.radius;
            let sy = this.y + sin(a) * this.radius;
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }
  
    pressed() {

        // Did I click on the rectangle?
        if (this.rollover) {
        this.dragging = true;
        // If so, keep track of relative location of click to corner of rectangle
        this.offsetX = this.x - mouseX;
        this.offsetY = this.y - mouseY;
        }
    }
  
    released() {
        // Quit dragging
        this.dragging = false;
    }
  }