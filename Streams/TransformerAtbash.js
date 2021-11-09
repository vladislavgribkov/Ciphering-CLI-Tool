const Transformer = require('./Transformer');

class TransformerAtbash extends Transformer {
    constructor() {
        super(0, 1, true);
    }
}
module.exports = TransformerAtbash;