const { argv } = process;

class Validator {
    static cheakAllRules(params, chainCypher, error) {
        Validator._checkConfigForDuplicatesParams(params, error);
        Validator._checkConfigCypher(chainCypher, error);
    }

    static _checkConfigForDuplicatesParams(params, error) {
        params.forEach(param => {
            const reg = new RegExp(`--${param}|-${param.at(0)}`, 'g')
            const count = [...argv.join(',').matchAll(reg)].length;
            if(count > 1) {
                error.setErrorAndCloseProcess(2, ` - "${param}"`);
            }
        });    
    }

    static _checkConfigCypher(chainCypher, error) {
        if(chainCypher) {
            const arr = chainCypher.split("-");
            const validChain = arr.every((chainItem) => chainItem === "C0" || chainItem === "C1" || chainItem === "R0" || chainItem === "R1" || chainItem === "A");
            Validator._checkValidChainOrSetError(validChain, error);
            return;
        }
         error.setErrorAndCloseProcess(4);
    }

    static _checkValidChainOrSetError(validChain, error) {
        if(!validChain) {
            error.setErrorAndCloseProcess(3);
        }

    }
}

module.exports = Validator;