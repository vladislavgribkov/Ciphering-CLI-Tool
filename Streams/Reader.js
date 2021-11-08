const { Readable } = require('stream');
const fs = require('fs');

const { stdin } = process;

class Reader extends Readable {
  constructor(error, inputFile = null) {
    super();
    this.inputFile = inputFile;
    this.fd = null;
    this.error = error;
  }

  _construct() {
    if(this.inputFile) {
      try{
        const data = fs.readFileSync(this.inputFile);
        this.push(data);
        return;
      }catch(e){
        this.error.setErrorAndCloseProcess(1, ` - ${this.inputFile}`);
      }
    }

    stdin.on("data", data => {
      this.push(data);
    });
  }

  _read(n) {}
}
module.exports = Reader;