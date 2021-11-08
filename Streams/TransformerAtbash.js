const Transformer = require('./Transformer');

class TransformerAtbash extends Transformer {
    constructor() {
        super(25, 1, true);
    }
}
module.exports = TransformerAtbash;