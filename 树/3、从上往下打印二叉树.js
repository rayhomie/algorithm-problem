/*
https://www.nowcoder.com/practice/7fe2212963db4790b57431d9ed259701?tpId=13&&tqId=11175&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking
描述
从上往下打印出二叉树的每个节点，同层节点从左至右打印。

示例1
输入：
{5,4,#,3,#,2,#,1}
返回值：
[5,4,3,2,1]
*/

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
//解法和二叉树的层序遍历一致 IIhttps://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
//队列
var levelOrderBottom = function (root) {
  const res = [];
  if (!root) return res;
  const queue = [];
  queue.push(root); //将根节点放入队列
  while (queue.length > 0) {
    const layerGroup = []; //存放当前层级的结果
    const n = queue.length; //当前的队列长度
    for (let i = 0; i < n; i++) {
      const target = queue.shift(); //依次出队列
      layerGroup.push(target.val); //值压入结果
      //将左右孩子一次压入队列
      if (target.left) {
        queue.push(target.left);
      }
      if (target.right) {
        queue.push(target.right);
      }
    }
    //从头插入结果
    res.unshift(layerGroup);
  }
  return res;
};
