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
 * @return {TreeNode}
 */
function increasingBST(root) {
  const stack = [];
  let head;
  let tail;

  while (root != null || stack.length) {
    if (root == null) {
      root = stack.pop();

      if (head == null) {
        head = root;
        tail = head;
      } else {
        tail.right = root;
        tail = tail.right;
        tail.left = null;
      }

      root = root.right;
    } else {
      stack.push(root);
      root = root.left;
    }
  }
  return head;
}
