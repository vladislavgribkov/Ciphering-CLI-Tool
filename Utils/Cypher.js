class Cypher {
  constructor(shift, encode, atbash = false) {
    this._shift = shift;
    this._encode = !!encode;
    this._atbash = atbash;
    this._conuntAlphabetLetters = 26;
    this._minCodeSmallLetter = 97;
    this._maxCodeSmallLetter = 122;
    this._minCodeBigLetter = 65;
    this._maxCodeBigLetter = 90;
  }

  encodeOrDecode(text) {
    this._text = text;
    const encodeSymbols = this._text.split('').map((symbol) => {
      const code = symbol.charCodeAt();
      if (this._checkForHittingTheRange(code)) {
        return this._atbash ? this._atbashEncode(code) : this._encodeOrDecodeSymbol(code);
      }
      return symbol;
    });
    return encodeSymbols.join('');
  }

  _atbashEncode(code) {
    let letterCode = code;
    if(this._smallLetter) {
      letterCode = this._maxCodeSmallLetter - (code - this._minCodeSmallLetter);
    }else{
      letterCode = this._maxCodeBigLetter - (code - this._minCodeBigLetter);
    }
    return String.fromCharCode(letterCode);
  }

  _encodeOrDecodeSymbol(code) {
    const encodedCharacterCode = this._encode ? code + this._shift : code - this._shift;

    if (this._smallLetter(code)) {
      return this._letter(encodedCharacterCode, this._minCodeSmallLetter, this._maxCodeSmallLetter);
    }
    return this._letter(encodedCharacterCode, this._minCodeBigLetter, this._maxCodeBigLetter);
  }

  _smallLetter(code) {
    return code >= this._minCodeSmallLetter && code <= this._maxCodeSmallLetter;
  }

  _letter(code, minCode, maxCode) {
    let letterCode = code;
    if (code < minCode) {
      letterCode += this._conuntAlphabetLetters;
    }
    if (code > maxCode) {
      letterCode -= this._conuntAlphabetLetters;
    }
    return String.fromCharCode(letterCode);
  }

  _checkForHittingTheRange(code) {
    return (
      (code >= this._minCodeBigLetter && code <= this._maxCodeBigLetter) ||
      (code >= this._minCodeSmallLetter && code <= this._maxCodeSmallLetter)
    );
  }
}

module.exports = Cypher;