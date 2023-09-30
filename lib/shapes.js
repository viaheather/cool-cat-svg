class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colorVar) {
        this.color = colorVar;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="200" cy="200" r="200" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="200,10 400,300 10,300" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect width="150" height="150" fill="${this.color}" />`
    }
}

module.exports = { Triangle, Square, Circle };
