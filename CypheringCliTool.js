const { pipeline } = require('stream');
const Reader = require('./Streams/Reader');
const Writer = require('./Streams/Writer');
const Error = require('./Utils/Error');
const Config = require('./Utils/Config');
const TransformerCezar = require('./Streams/TransformerCezar.js');
const TransformerAtbash = require('./Streams/TransformerAtbash.js');
const TransformerRot8 = require('./Streams/TransformerRot8.js');

class CypheringCliTool {
    constructor() {
        this._error = new Error();
        this._config = new Config(this._error);  
    }

    _getTransformStreams(config) {
        const arrayTransformStreams = config.split('-').map(rule => {
            const [cypher, encode] = rule;
            switch(cypher) {
                case "C":
                    return new TransformerCezar(encode);
                case "R":
                    return new TransformerRot8(encode);
                default:
                    return new TransformerAtbash();
            }
        });
        return arrayTransformStreams;
    }

    run() {
        const {input, output, config} = this._config.getConfig();
        const reader = new Reader(this._error, input);
        const writer = new Writer(this._error, output);
        const arrayTransformStreams = this._getTransformStreams(config);

        pipeline(...[reader, ...arrayTransformStreams, writer], err => {
            process.exit(err.code);
        });
    }
}

module.exports = CypheringCliTool;