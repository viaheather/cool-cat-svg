class Circle {
    constructor(cx,cy,r,fill) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.fill = fill;
    }
}

class Shape {
    constructor(x, y, fill) {
        this.x = x;
        this.y = y;
        this.fill = fill;
    }
}

class Triangle extends Shape {
    constructor(x, y, fill) {
        super(x,y,fill);
        this.points = 3;
    }

    addPoints(points) {
        this.points.push(points);
    }
} 

class Square extends Shape {
    constructor(x, y, fill) {
        super(x,y,fill);
        this.points = 4;
    }
    addPoints(points) {
        this.points.push(points);
    }
}

const newSquare = new Square(
    '200',
    '200',
    'black',
);

console.log(newSquare);