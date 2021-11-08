const Transformer = require('./Transformer');

class TransformerCezar extends Transformer {
    constructor(encode) {
        super(1, +encode);
    }
}
module.exports = TransformerCezar;