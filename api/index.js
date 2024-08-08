const express = require('express');
const app = express();

var cors = require('cors');

const bodyParser = require('body-parser');

const corsOpt = {
    origin: '*',

    methods: [
        'post'
    ],

    allowedHeaders: [
        'Access-Control-Allow-Origin',
        'Origin'
    ]
};

app.use(cors(corsOpt));

app.use(bodyParser.json());

app.use('/api', require('./routes/app.routes'))

app.listen(4000, function () {
    console.log('Server is running on port 4000');
})
