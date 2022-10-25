const express = require('express');
const path = require('path');
const { errorHandler } = require('../utils/errHandler');

module.exports = (app) => {
    app.use(express.json());

    app.disable('x-powered-by');

    app.use(express.static(path.resolve(__basedir, 'static')));

    app.use(errorHandler);
};