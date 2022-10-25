const mongoose = require('mongoose');

const configSchema = new mongoose.Schema({
    chainId: {
        type: String,
        required: false,
    },
    from: {
        type: String,
        required: false,
    },
    gas: {
        type: Number,
        required: false,
    },
    gasPrice: {
        type: String,
        required: false,
    },
    hash: {
        type: String,
        required: false,
    },
    input: {
        type: String,
        required: false,
    },
    nonce: {
        type: Number,
        required: false,
    },
    r: {
        type: String,
        required: false,
    },
    s: {
        type: String,
        required: false,
    },
    to: {
        type: String,
        required: false,
    },
    transactionIndex: {
        type: Number,
        required: false,
    },
    type: {
        type: Number,
        required: false,
    },
    v: {
        type: String,
        required: false,
    },
    value: {
        type: String,
        required: false,
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('configuration', configSchema);