class Shape {
    constructor(initials,color,shape) {
        this.initials = initials,
        this.color = color,
        this.shape = shape;
    }
}

class Circle extends Shape {
    constructor(data) {
        super(data)
    }
    render() {
        return `<circle cx="200" cy="200" r="200" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(data) {
        super(data)
    }
    render() {
        return `<polygon points="200,10 400,300 10,300" fill="${this.color}" />`
    }
}

class Square extends Shape {
    constructor(data) {
        super(data)
    }
    render() {
        return `<rect width="150" height="150" fill="${this.color}" />`
    }
}

module.exports = { Triangle, Square, Circle };
