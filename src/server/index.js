/**
 * Created by asafam on 01/03/2019.
 */

'use strict';

const express = require('express');
const path = require('path');
const app = express();
const volleyball = require('volleyball');


app.use(volleyball);
//serve up static files
app.use('/', express.static(path.join(__dirname, '..', '..', 'dist')));
app.use('/theme', express.static(path.join(__dirname, '..', '..', 'node_modules/admin-lte')));
app.use('/bower_components', express.static(path.join(__dirname, '..', '..', 'bower_components')));
app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// handle every other route with index.html, which will contain
// a script tag to our application's JavaScript file(s).
app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '..', '..', 'dist', 'index.html'))
});

//listen on port
const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log(`Server listens on port ${port}`);
});