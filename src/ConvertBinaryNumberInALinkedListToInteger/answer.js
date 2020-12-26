/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
function getDecimalValue(head) {
  let result = head.val;
  let current = head.next;

  while (current) {
    result = result * 2 + current.val;
    current = current.next;
  }
  return result;
}
