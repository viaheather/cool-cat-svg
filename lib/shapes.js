class Circle{
    constructor(cx,cy,r,fill) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.fill = fill;
    }
}

class Shape {
    constructor(x, y, fill,points) {
        this.x = x;
        this.y = y;
        this.fill = fill;
        this.points = points;
    }
}

class Triangle extends Shape {
    constructor(x, y, fill,points) {
        super(x,y,fill,points);
    }
} 

class Square extends Shape {
    constructor(x, y, fill,points) {
        super(x,y,fill,points);
    }
}