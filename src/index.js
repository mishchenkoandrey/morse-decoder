const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

function decode(expr) {
  const words = expr.split('**********');
  const chunk = (i, n) => i.split('')
    .reduce((acc, item, index) => {
      const chunkNum = Math.floor(index / n); 
      acc[chunkNum] = [].concat((acc[chunkNum]||[]), item); 
      return acc;
    }, []);
  const letters = words
    .map((i) => {
      return chunk(i, 10)
        .map((i) => {
          const letter = Number(i.join('')).toString();
          return MORSE_TABLE[chunk(letter, 2)
            .map((i) => Number(i[1]) === 0
              ? '.'
              : '-').join('')];
        }).join('');
    });
  return letters.join(' ');
};

module.exports = {
  decode
};
