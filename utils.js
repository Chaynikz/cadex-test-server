
module.exports.getVertices = (length, width, height) => {

    const l = length / 2;
    const w = width / 2;
    const h = height / 2;

    const vertices = [
        { a: -l, b: -w, c: h },
        { a: l, b: -w, c: h },
        { a: -l, b: w, c: h },
        { a: l, b: w, c: h },
        { a: -l, b: -w, c: -h },
        { a: l, b: -w, c: -h },
        { a: -l, b: w, c: -h },
        { a: l, b: w, c: -h }
    ]

    return vertices;
};


module.exports.getFaces = () => {

    const faces = [
        // front
        { a: 0, b: 3, c: 2 },
        { a: 0, b: 1, c: 3 },
        // right
        { a: 1, b: 7, c: 3 },
        { a: 1, b: 5, c: 7 },
        // back
        { a: 5, b: 6, c: 7 },
        { a: 5, b: 4, c: 6 },
        // left
        { a: 4, b: 2, c: 6 },
        { a: 4, b: 0, c: 2 },
        // top
        { a: 2, b: 7, c: 6 },
        { a: 2, b: 3, c: 7 },
        // bottom
        { a: 4, b: 1, c: 0 },
        { a: 4, b: 5, c: 1 },
    ];

    return faces;
};