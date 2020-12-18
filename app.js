const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { getVertices, getFaces } = require('./utils');


const app = express();

app.use(cors());
app.use(bodyParser.json());


app.post('/', (req, res) => {
    console.log('Got a POST request');

    const { length, width, height } = req.body;

    const vertices = getVertices( length, width, height );
    const faces = getFaces();
    const scaleRatio = 1 / Math.max( length, width, height );

    return res.status(200).send({ vertices, faces, scaleRatio }).end();
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send('Something broke!');
});


app.listen(3001, () => {
    console.log(`listening at http://localhost:3001`);
});

