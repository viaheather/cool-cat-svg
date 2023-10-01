class Shape {
    constructor(initials,color,fontcolor) {
        this.initials = initials;
        this.color = color;
        this.fontcolor = fontcolor;
    }
}

class Circle extends Shape {
    constructor(initials, color, fontcolor) {
        super(initials, color, fontcolor) 
    }
    render() {
        return `<circle cx="200" cy="200" r="200" fill="${this.color}" />
        <text x="200" y="250" text-anchor="middle" font-size="200" fill="${this.fontcolor}">${this.initials}</text></svg>`;
    }
}

class Triangle extends Shape {
    constructor(initials, color, fontcolor) {
        super(initials, color, fontcolor) 
    }
    render() {
        return `<polygon points="250,00 500,500 10,500" fill="${this.color}" />
        <text x="255" y="410" text-anchor="middle" font-size="150" fill="${this.fontcolor}">${this.initials}</text></svg>`
    }
}

class Square extends Shape {
    constructor(initials, color, fontcolor) {
        super(initials, color, fontcolor) 
    }
    render() {
        return `<rect width="500" height="500" fill="${this.color}" />
        <text x="250" y="300" text-anchor="middle" font-size="200" fill="${this.fontcolor}">${this.initials}</text></svg>`
    }
}

module.exports = { Triangle, Square, Circle };
