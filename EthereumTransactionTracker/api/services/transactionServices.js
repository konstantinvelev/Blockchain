const transactionModel = require('../models/transactionModel');

function insertTx(req, res, next) {
    let data = req.body;

    transactionModel.create(data)
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
    insertTx,
}