const { Triangle, Square, Circle } = require("./shapes.js");

describe("Square test", () => {
    test("test for a square with a red background, red text, and AA initials", () => {
        const square = new Square("AA","pink","red");
        const expectedSVGString = `<rect width="500" height="500" fill="pink" />
        <text x="250" y="300" text-anchor="middle" font-size="200" fill="red">AA</text></svg>`;

        expect(square.render()).toBe(expectedSVGString);
    });
});

describe("Triangle test", () => {
    test("test for a triangle with a red background, red text, and AA initials", () => {
        const triangle = new Triangle("AA","pink","red");
        const expectedSVGString = `<polygon points="250,00 500,500 10,500" fill="pink" />
        <text x="255" y="410" text-anchor="middle" font-size="150" fill="red">AA</text></svg>`;

        expect(triangle.render()).toBe(expectedSVGString);
    });
});

describe("Circle test", () => {
    test("test for a circle with a red background, red text, and AA initials", () => {
        const circle = new Circle("AA","pink","red");
        const expectedSVGString = `<circle cx="200" cy="200" r="200" fill="pink" />
        <text x="200" y="250" text-anchor="middle" font-size="200" fill="red">AA</text></svg>`;

        expect(circle.render()).toBe(expectedSVGString);
    });
});