const errorMessages = {
  missingArgument: 'Missing argument',
  invalidArgument: 'Invalid argument',
};

/**
 * @param {array} list
 * @return {number}
 */
function singleNumber(list){
  if(!list) throw new Error(errorMessages.missingArgument);
  if(!Array.isArray(list)) throw new Error(errorMessages.invalidArgument);
  const listMapping = new Map();

  for(const item of list){
    listMapping.set(item, listMapping.get(item) ? listMapping.get(item) + 1 : 1);
  }

  for(const item of list){
    console.log('listMapping.get(item)', item, listMapping.get(item))
    if(listMapping.get(item) === 1) return item;
  }

  return null;
}

singleNumber([4,1,2,1,2]);

export {
  errorMessages,
}
export default singleNumber;
