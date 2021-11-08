const Transformer = require('./Transformer');

class TransformerRot8 extends Transformer {
    constructor(encode) {
        super(8, +encode);
    }
}
module.exports = TransformerRot8;