class Error {
    constructor() {
        this._error = {
            1: "Файл не найден",
            2: "Дублирование аргумента",
            3: "Конфиг должен состоять из следующих правил, разделенных '-' : C0, C1, R0, R1, A",
            4: "Конфиг не может быть пустым"
        }
    }

    setErrorAndCloseProcess(code, additionalText = '') {
        process.stderr.write(`${this._error[code]}${additionalText}`);
        process.exit(code);
    }
}

module.exports = Error;