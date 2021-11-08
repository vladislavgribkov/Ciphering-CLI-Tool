const { Transform } = require('stream');

const Cypher = require('../Utils/Cypher');

class Transformer extends Transform {
    constructor(shift, encode, atbash = false) {
        super({encoding: "utf-8"});
        this._cypher = new Cypher(shift, encode, atbash);
    }

    _transform(chunk, encoding, callback) {
        try {
            const resultString =  this._cypher.encodeOrDecode(chunk.toString());
            callback(null, resultString);
        } catch (err) {
            callback(err);
        }
    }
}
module.exports = Transformer;