const { Triangle, Square, Circle } = require("./lib/shapes");

describe("Red square with AA", () => {
    describe("Rendering", () => {
        it("expected to render square string", () => {
            const square = new Square({
                initials: "AA",
                color: "Red",
                shape: "Square",
            })
            expect(square.render()).toBe(
                `<rect width="150" height="150" fill="red" />`
            );
        });
    });
});