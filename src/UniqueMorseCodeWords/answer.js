function uniqueMorseRepresentations(words) {
  const map = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
  };

  let wordsInCode = new Set();
  words.forEach((word, index) => {
    let temp = '';
    for (let i = 0; i < word.length; i++) {
      temp += map[word[i]];
    }
    wordsInCode.add(temp);
  });

  return wordsInCode.size;
}
