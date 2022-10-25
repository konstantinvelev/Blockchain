const configurationModel = require('../models/configurationModel');

function insertConfiguration(req, res, next) {
    let data = req.body;

    configurationModel.create(data)
        .then((data) => {
            if (data) {
                res.status(200).json(data)
            }
            else {
                res.status(400).json({ message: 'The insertion was failed!' });
            }
        })
        .catch (next);
}

function getLastConfig(req, res, next) {
    configurationModel.findOne({}, {}, { sort: { 'created_at' : -1 } })
        .then((data) => {
            if (data) {
                res.status(200).json(data)
            }
            else {
                res.status(400).json({ message: 'The insertion was failed!' });
            }
        })
        .catch (next);
}

module.exports = {
    insertConfiguration,
    getLastConfig,
}