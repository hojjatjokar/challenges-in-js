/**
 * @param {string[]} emails
 * @return {number}
 */
function numUniqueEmails(emails) {
  const hashMap = new Map();

  for (const value of emails) {
    const [local, domain] = value.split('@');
    const [plusSeparated] = local.split('+');
    const dotsSeparated = plusSeparated.split('.').join('');
    const email = `${dotsSeparated}@${domain}`;

    hashMap.set(email, hashMap.has(email) ? hashMap.get(email) + 1 : 1);
  }

  return hashMap.size;
}
