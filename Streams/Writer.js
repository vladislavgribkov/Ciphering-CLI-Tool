const { Writable } = require('stream');
const fs = require('fs');

const { stdout } = process;

class Writer extends Writable {
  constructor(error, outputFile = null) {
    super({defaultEncoding: 'utf-8'});
    this.outputFile = outputFile;
    this.error = error;
    this._checkFile();
  }

  _checkFile() {
    if(this.outputFile) {
      try{
        fs.readFileSync(this.outputFile);
      }catch(e) {
        this.error.setErrorAndCloseProcess(1, ` - ${this.outputFile}`);
      }
    }
  }

  _write(chunk, encoding, callback) {
    const text = chunk.toString();
    if(this.outputFile) {
      fs.appendFileSync(this.outputFile, text);
    }else{
      stdout.write(text);
    }
    callback();
  }
}
module.exports = Writer;