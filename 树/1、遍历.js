/*1、储存（链表来存储）https://www.bilibili.com/video/BV1ay4y1q7UW?p=12&spm_id_from=pageDriver*/
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left(left === undefined ? null : left);
  this.right = right === undefined ? null : right;
}

/*2、前序遍历（根左右）
https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
(如果存在左节点，将左节点按根左右的顺序进拆分)*/
//递归
function preorderTraversal(root) {
  const res = [];
  //如果是空树，则直接返回[]
  if (!root) return res;
  function handle(node) {
    res.push(node.val); //将访问的节点压入结果
    if (node.left) {
      //用于访问左节点，指导左指向为空
      handle(node.left);
    }
    if (node.right) {
      //用于访问右节点，指导右指向为空
      handle(node.right);
    }
  }
  handle(root);
  return res;
}

//迭代+栈
function preorderTraversal(root) {
  const res = [];
  if (!root) return res;
  const stack = [];
  stack.push(root);
  while (stack.length > 0) {
    const current = stack.pop();
    res.push(current.val); //将弹出的值记录结果
    if (current.right !== null) {
      stack.push(current.right); //先压入右，因为右是后栈
    }
    if (current.left !== null) {
      stack.push(current.left); //下一次执行的时候就先被弹出
    }
  }
  return res;
}

/*3、中序遍历（左根右）https://leetcode-cn.com/problems/binary-tree-inorder-traversal/submissions/*/
//递归
var inorderTraversal = function (root) {
  const res = [];
  if (!root) return res;
  function order(node) {
    if (node.left) {
      //先遍历左节点到底，然后将当前子节点放入结果，再去遍历右节点到底（最深左节点的开始记录结果）
      order(node.left);
    }
    res.push(node.val);
    if (node.right) {
      order(node.right);
    }
  }
  order(root);
  return res;
};
//迭代+栈
var inorderTraversal = function (root) {
  const res = [];
  if (!root) return res;
  const stack = [];
  let temp = root;
  while (temp !== null) {
    //遍历所有左节点，并加入栈
    stack.push(temp);
    temp = temp.left;
  }
  //开始出栈记录结果
  while (stack.length > 0) {
    //根据pop来控制执行
    let current = stack.pop();
    res.push(current.val); //在压入右叶子之前需要处理一下结果，因为中序遍历
    if (current.right) {
      let temp2 = current.right; //访问当前右节点（又进一个循环）
      while (temp2 !== null) {
        //压入当前右节点的所有左节点
        stack.push(temp2);
        temp2 = temp2.left;
      }
    }
  }
  return res;
};

/*4、后序遍历（左右根）https://leetcode-cn.com/problems/binary-tree-postorder-traversal/*/
//递归
var postorderTraversal = function (root) {
  let res = [];
  if (!root) return res;
  function order(node) {
    if (node.left) {
      //遍历左节点到最深处
      order(node.left);
    }
    if (node.right) {
      order(node.right);
    }
    res.push(node.val);
  }
  order(root);
  return res;
};
//迭代+栈
var postorderTraversal = function (root) {
  let res = [];
  if (!root) return res;
  let stack = [];
  let temp = root;
  while (temp) {
    //将左叶子全部压入栈
    stack.push(temp);
    temp = temp.left;
  }
  let prev = null; //用于记录上一次的弹出节点
  while (stack.length > 0) {
    const top = stack[stack.length - 1];
    if (!top.right || (top.right && prev === top.right)) {
      /*如果当前节点没有右叶子 
        或者
        如果上一次弹出的节点 和 当前的右叶子地址相同，则记录结果（最先进入的右叶子也需要结束）*/
      prev = stack.pop();
      res.push(top.val);
    } else {
      //否则将所有左叶子压入
      let temp2 = top.right;
      while (temp2 !== null) {
        stack.push(temp2);
        temp2 = temp2.left;
      }
    }
  }
  return res;
};

//二叉树的层序遍历https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
//递归
function levelOrder(root) {
  const arr = [];
  //递归形式类似于前序遍历,分层记录结果
  //第一个参数是节点，第二个参数是结果索引
  function loop(node, h) {
    if (!node) return;
    if (!arr[h]) arr[h] = [];
    arr[h].push(node.val);

    loop(node.left, h + 1);
    loop(node.right, h + 1);
  }
  loop(root, 0);
  return arr;
}

//队列
var levelOrder = function (root) {
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
    //结果放入res
    res.push(layerGroup);
  }
  return res;
};

//二叉树的层序遍历 IIhttps://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
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
