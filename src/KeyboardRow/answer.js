/**
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(words) {
  const keys = {
    q: "firstRow", w: "firstRow", e: "firstRow", r: "firstRow",
    t: 'firstRow',
    y: 'firstRow', u: 'firstRow', i: 'firstRow', o: 'firstRow',
    p: 'firstRow', a:'secondRow', s:'secondRow', d:'secondRow',
    f:'secondRow', g:'secondRow', 
    h:'secondRow', j:'secondRow', k:'secondRow', l:'secondRow',
    z:'thirdRow', x:"thirdRow", c:'thirdRow', v:'thirdRow',
    b:'thirdRow', n:'thirdRow', m: 'thirdRow',
  };

  return words.filter(word=>{
    let kind = keys[word[0].toLowerCase()] ;
    
    for(const key of word){
      if(keys[key.toLowerCase()] !== kind) return false
    }
    return true;
  });
};