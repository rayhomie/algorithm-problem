/*
Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。
请你实现 Trie 类：
Trie() 初始化前缀树对象。
void insert(String word) 向前缀树中插入字符串 word 。
boolean search(String word) 如果字符串 word 在前缀树中，返回 true（即，在检索之前已经插入）；否则，返回 false 。
boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 true ；否则，返回 false 。

示例：
输入
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
输出
[null, null, true, false, true, null, true]

解释
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // 返回 True
trie.search("app");     // 返回 False
trie.startsWith("app"); // 返回 True
trie.insert("app");
trie.search("app");     // 返回 True
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/implement-trie-prefix-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 数据结构图片：https://pic.leetcode-cn.com/1618368870-HCPTZG-1.png
 */
var Trie = function () {
  this.children = {};
};
Trie.prototype.insert = function (word) {
  let current = this.children//创建一个指针访问这颗树
  Array.from(word).forEach(item => {
    if (!current[item]) {
      current[item] = {}
    }
    current = current[item]
  })
  current.isEnd = true
};
Trie.prototype.search = function (word) {
  let current = this.children//创建一个指针访问这颗树
  for (const item of word) {
    if (!current[item]) {
      return false;
    }
    current = current[item];
  }
  //最后一次指针的指向还需要判断下，使用有结束的标记
  return current !== undefined && current.isEnd !== undefined;
};
Trie.prototype.startsWith = function (prefix) {
  let current = this.children//创建一个指针访问这颗树
  for (const item of prefix) {
    if (!current[item]) {
      return false;
    }
    current = current[item];
  }
  return current ? true : false;
};
let t = new Trie();
t.insert('aaa')
console.log(t.startsWith('aa'));


// /**
//  * 官方解答
//  */
// var Trie = function () {
//   //以对象的形式存储这棵树
//   this.children = {};
// };
// Trie.prototype.insert = function (word) {
//   let node = this.children;
//   for (const ch of word) {
//     if (!node[ch]) {
//       node[ch] = {};
//     }
//     node = node[ch];
//   }
//   node.isEnd = true;
// };
// Trie.prototype.searchPrefix = function (prefix) {
//   let node = this.children;
//   for (const ch of prefix) {
//     if (!node[ch]) {
//       return false;
//     }
//     node = node[ch];
//   }
//   return node;
// }
// Trie.prototype.search = function (word) {
//   const node = this.searchPrefix(word);
//   return node !== undefined && node.isEnd !== undefined;
// };
// Trie.prototype.startsWith = function (prefix) {
//   return this.searchPrefix(prefix);
// };
