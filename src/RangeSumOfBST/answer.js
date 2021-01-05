/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function rangeSumBST(root, low, high) {
  let result = 0;

  function travers(current) {
    if (!current) return;
    if (current.val >= low && current.val <= high) result += current.val;
    if (current.val >= low && current.left) travers(current.left);
    if (current.val <= high && current.right) travers(current.right);
  }

  travers(root);

  return result;
}
