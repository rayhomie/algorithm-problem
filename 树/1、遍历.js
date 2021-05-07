/*1、储存（链表来存储）*/
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left(left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/*2、前序遍历（根左右）
https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
(如果存在左节点，将左节点按根左右的顺序进拆分)*/
//递归
function preorderTraversal(root) {
  const res = []
  //如果是空树，则直接返回[]
  if (!root) return res
  function handle(node) {
    res.push(node.val)//将访问的节点压入结果
    if (node.left) {//用于访问左节点，指导左指向为空
      handle(node.left)
    }
    if (node.right) {//用于访问右节点，指导右指向为空
      handle(node.right)
    }
  }
  handle(root)
  return res
}

//迭代+栈
function preorderTraversal(root) {
  const res = []
  if (!root) return res
  const stack = []
  stack.push(root)
  while (stack.length > 0) {
    const current = stack.pop();
    res.push(current.val)//将弹出的值记录结果
    if (current.right !== null) {
      stack.push(current.right)//先压入右，因为右是后栈
    }
    if (current.left !== null) {
      stack.push(current.left)//下一次执行的时候就先被弹出
    }
  }
  return res
}


/*3、中序遍历（左根右）https://leetcode-cn.com/problems/binary-tree-inorder-traversal/submissions/*/
//递归
var inorderTraversal = function (root) {
  const res = []
  if (!root) return res
  function order(node) {
    if (node.left) {//先遍历左节点到底，然后将当前子节点放入结果，再去遍历右节点到底（最深左节点的开始记录结果）
      order(node.left)
    }
    res.push(node.val)
    if (node.right) {
      order(node.right)
    }
  }
  order(root)
  return res
};
//迭代+栈
var inorderTraversal = function (root) {
  const res = []
  if (!root) return res
  const stack = []
  let temp = root
  while (temp !== null) {//遍历所有左节点，并加入栈
    stack.push(temp)
    temp = temp.left
  }
  //开始出栈记录结果
  while (stack.length > 0) {//根据pop来控制执行
    let current = stack.pop()
    res.push(current.val)
    if (current.right) {
      let temp2 = current.right//访问当前右节点（又进一个循环）
      while (temp2 !== null) {//压入当前右节点的所有左节点
        stack.push(temp2)
        temp2 = temp2.left
      }
    }
  }
  return res
}

/*4、后序遍历（左右根）*/
//迭代
