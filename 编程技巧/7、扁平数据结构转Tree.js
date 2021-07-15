/**
 * 背景：
 * https://juejin.cn/post/6983904373508145189#heading-6
 * https://juejin.cn/post/6982509039204712479#heading-2
 */

const dataSource = [
  {
    "id": 1,
    "name": "中华人民共和国",
    "pid": 0,
  },
  {
    "id": 1001,
    "name": "浙江省",
    "pid": 1,
  },
  {
    "id": 2001,
    "name": "杭州市",
    "pid": 1001,
  },
  {
    "id": 3001,
    "name": "西湖区",
    "pid": 2001,
  },
  {
    "id": 4001,
    "name": "杭州市第一人民医院",
    "pid": 3001,
  },
  // 其他略
]
const data = [
  { id: 1, pid: 0, name: 'no.1' },
  { id: 2, pid: 1, name: 'no.2' },
  { id: 3, pid: 1, name: 'no.3' },
  { id: 4, pid: 1, name: 'no.4' },
  { id: 5, pid: 1, name: 'no.5' },
  { id: 6, pid: 2, name: 'no.6' },
  { id: 7, pid: 2, name: 'no.7' },
  { id: 8, pid: 2, name: 'no.8' },
  { id: 9, pid: 3, name: 'no.9' },
  { id: 10, pid: 3, name: 'no.10' },
  { id: 11, pid: 3, name: 'no.11' },
  { id: 12, pid: 4, name: 'no.12' },
  { id: 13, pid: 4, name: 'no.13' },
  { id: 14, pid: 13, name: 'no.14' },
];

function arrayToTree(items) {
  const result = [];   // 存放结果集
  const itemMap = {};  // 

  // 先转成map存储
  for (const item of items) {
    itemMap[item.id] = { ...item, children: [] }
  }

  for (const item of items) {
    const id = item.id;
    const pid = item.pid;
    const treeItem = itemMap[id];
    if (pid === 0) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        }
      }
      itemMap[pid].children.push(treeItem)
    }

  }
  return result;
}

console.log(JSON.stringify(arrayToTree(data)));