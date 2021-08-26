/**
 * 背景：
 * https://juejin.cn/post/6983904373508145189#heading-6
 * https://juejin.cn/post/6982509039204712479#heading-2
 */

const dataSource = [
  {
    id: 1,
    name: "中华人民共和国",
    pid: 0,
  },
  {
    id: 1001,
    name: "浙江省",
    pid: 1,
  },
  {
    id: 2001,
    name: "杭州市",
    pid: 1001,
  },
  {
    id: 3001,
    name: "西湖区",
    pid: 2001,
  },
  {
    id: 4001,
    name: "杭州市第一人民医院",
    pid: 3001,
  },
  // 其他略
];
const data = [
  { id: 1, pid: 0, name: "no.1" },
  { id: 2, pid: 1, name: "no.2" },
  { id: 3, pid: 1, name: "no.3" },
  { id: 4, pid: 1, name: "no.4" },
  { id: 5, pid: 1, name: "no.5" },
  { id: 6, pid: 2, name: "no.6" },
  { id: 7, pid: 2, name: "no.7" },
  { id: 8, pid: 2, name: "no.8" },
  { id: 9, pid: 3, name: "no.9" },
  { id: 10, pid: 3, name: "no.10" },
  { id: 11, pid: 3, name: "no.11" },
  { id: 12, pid: 4, name: "no.12" },
  { id: 13, pid: 4, name: "no.13" },
  { id: 14, pid: 13, name: "no.14" },
];

/**
 * 递归查找，获取children
 */
const getChildren = (data, result, pid) => {
  for (const item of data) {
    if (item.pid === pid) {
      const newItem = { ...item, children: [] };
      result.push(newItem);
      getChildren(data, newItem.children, item.id);
    }
  }
};
const arrayToTree = (data, pid = 0) => {
  const result = [];
  getChildren(data, result, pid);
  return result;
};

/**
 * 循环O(n)
 */
function arrayToTree(items) {
  const result = []; // 存放结果集
  const itemMap = {};
  // 先转成map存储
  for (const item of items) {
    itemMap[item.id] = { ...item, children: [] }; // 将遍历一遍用哈希表存储起来
  }
  for (const item of items) {
    const id = item.id;
    const pid = item.pid;
    const treeItem = itemMap[id];
    if (pid === 0) {
      //这里只是输出pid为0的链表即可
      // 第一个的pid为0，加入结果
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        // 当pid在map中找不到对应的id，则将空的加入结果
        itemMap[pid] = {
          children: [],
        };
      }
      // itemMap[pid]找到对应id的值,将其加入到children中
      itemMap[pid].children.push(treeItem);
    }
  }
  return result;
}

/**
 * 遍历过滤两次：O(n^2)
 */
const arrayToTree = (itemArray) => {
  return itemArray.filter((item) => {
    // filter会将整个数组遍历一遍
    // 挂载子级
    item["children"] = itemArray.filter((child) => item["id"] === child["pid"]); // 返回的数组是浅拷贝的
    // 返回顶层数据
    return item["pid"] === 0; // 找到顶层pid为0的数据返回
  });
};

console.log(JSON.stringify(arrayToTree(data)));



// the stuct of TreeNode
class TreeNode {
  id = 0;
  pid = 0;
  name = "";
  children = [];

  constructor(node) {
    const { id, pid, name } = node;

    this.id = id;
    this.pid = pid;
    this.name = name;
  }
}

const createTreeNode = (node) => {
  let res = new TreeNode(node);
  return res;
};

// the compare of sort
const compare = (properties) => {
  return (a, b) => {
    for (let property of properties) {
      if (a[property] !== b[property]) return a[property] - b[property];
    }
  };
};

const arrayToTree = (arr) => {
  // judge the boundary conditions
  if (!arr || !arr.length) return;
  // sort the data according to rules, pid -> id
  arr.sort(compare(["pid", "id"]));

  /**
   * root
   * curNodes: record which nodes have been traversed
   * curParNode: record who the current parent node is
   */
  let root = createTreeNode(arr.shift()),
    curNodes = [root],
    curParNode = curNodes.shift();

  for (let node of arr) {
    let curNode = createTreeNode(node);
    // Mark the curNode(current node) has been traversed, put it into the curNodes
    curNodes.push(curNode);

    //  Determine whether the parent node of curNode(current node) is the curParNode(current parent node)
    while (curParNode.id !== curNode.pid) {
      // if not, changed the curParNode
      curParNode = curNodes.shift();
    }
    // put the children node into the curParNode's children array
    curParNode.children.push(curNode);
  }
  return root;
};

console.log(arrayToTree(data));

