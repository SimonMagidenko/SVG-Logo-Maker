const { Triangle, Square, Circle } = require("./shapes");


function cleanSvg(svgString) {
    return svgString.replace(/\s+/g, ' ').trim();
}

function assertSvgEqual(receivedSvg, expectedSvg) {
    const cleanedReceivedSvg = cleanSvg(receivedSvg);
    const cleanedExpectedSvg = cleanSvg(expectedSvg);

    expect(cleanedReceivedSvg).toEqual(cleanedExpectedSvg);
}

describe('Shapes', () => {
    describe('Triangle', () => {
        it('Should generate a triangle in generatedLogo.svg that is blue, with the text "SZM" in white', () => {
            const triangle = new Triangle('blue', 'SZM', 'white');
            const expectedSvg = `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <polygon points="100, 15 200, 200 0, 200" fill="blue"/>
      <text x="100" y="185" font-size="70" text-anchor="middle" fill="white">SZM</text>
      </svg>`;

            assertSvgEqual(triangle.render(), expectedSvg);
        });
    });

    describe('Square', () => {
        it('Should generate a square in generatedLogo.svg that is green, with the text "KEI" in black', () => {
            const square = new Square('green', 'KEI', 'black');
            const expectedSvg = `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
         <rect width="200" height="200" fill="green" />
         <text x="100" y="125" font-size="70" text-anchor="middle" fill="black">KEI</text>
       </svg>`;

            assertSvgEqual(square.render(), expectedSvg);
        });
    });

    describe('Circle', () => {
        it('Should generate a circle in generatedLogo.svg that is grey, with the text "PYU" in orange', () => {
            const circle = new Circle('grey', 'PYU', 'orange');
            const expectedSvg = `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="grey" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="orange">PYU</text>
        </svg>`;

            assertSvgEqual(circle.render(), expectedSvg);
        });
    });
});
