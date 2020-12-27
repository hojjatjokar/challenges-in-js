/**
 * @param {string} command
 * @return {string}
 */
function interpret(command) {
  let result = [];

  for (let i = 0; i < command.length; i++) {
    if (command[i] == 'G') {
      result.push('G');
    }

    if (command[i] == ')' && command[i - 1] == '(') {
      result.push('o');
    }
    if (
      command[i] == ')' &&
      command[i - 1] == 'l' &&
      command[i - 2] == 'a' &&
      command[i - 3] == '('
    ) {
      result.push('al');
    }
  }

  return result.join('');
}
