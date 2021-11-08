const { argv } = process;
const validator = require('./Validator');

class Config {
    constructor(error) {
        this._error = error;
        this._params = ['input', 'output', 'config'];
    }

    getConfig() {
        const config = {};
        this._params.forEach(param => {
            let index;
            const exist = argv.indexOf(`--${param}`) !== -1;
            if(exist) index = argv.indexOf(`--${param}`);
            else index = argv.indexOf(`-${param.at(0)}`);
            config[param] = index !== -1 ? argv[index + 1].trim() : null;
        });
        validator.cheakAllRules(this._params, config.config, this._error);
        return config;
    }
}

module.exports = Config;