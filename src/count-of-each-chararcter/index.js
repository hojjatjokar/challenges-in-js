const errorMessages = {
  missingArgument: 'Expect a string as argument',
  wrongArgument: 'Expect a argument of type string',
}

/**
 * @param {string} str
 * @return {object}
 */
function countOfEachCharacter(str){
  if(!str) throw new Error(errorMessages.missingArgument);
  if(typeof str !== 'string') throw new Error(errorMessages.wrongArgument);

  const result = {};
  for(const item of str){
    result[item] = result[item] ? result[item] +1: 1;
  }
  return result;
}

export {
  errorMessages,
};
export default countOfEachCharacter;