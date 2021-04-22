/*
    LRU缓存机制https://leetcode-cn.com/problems/lru-cache/

运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
实现 LRUCache 类：

LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。
当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 
进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？
*/

/**
 *下面是版本一：储存3000个的时候会超时，时间复杂度为o(n)
 */

var LRUCache = function (capacity) {
  this.obj = {}
  this.length = capacity
  this.index = 0
};
LRUCache.prototype.get = function (key) {
  if (this.obj[key] === undefined) {
    return -1
  } else {
    this.index++
    this.obj[key] = { value: this.obj[key].value, index: this.index }
    return this.obj[key].value
  }
};
LRUCache.prototype.put = function (key, value) {
  this.index++;
  let Entries = []
  let hasOwnProperty = false
  let min = { xx: 0 }
  for (let item in this.obj) {
    if (item.toString() === key.toString()) {
      hasOwnProperty = true
    }
    Entries.push([item, this.obj[item]])
    if (min.xx === 0) {
      min = { ...this.obj[item], key: item }
    } else {
      if (this.obj[item].index < min.index) {
        min = { ...this.obj[item], key: item }
      }
    }
  }
  if (Entries.length < this.length) {
    this.obj[key] = { value, index: this.index };
    return
  }
  if (Entries.length == this.length && hasOwnProperty) {
    this.obj[key] = { value, index: this.index };
    return
  }
  else {
    const findKey = min.key
    if (key.toString() === findKey) {
      this.obj[findKey] = { value, index: this.index }
    } else {
      delete this.obj[findKey]
      this.obj[key] = { value, index: this.index }
    }
  }
};


/*
  下面是版本二:使用ES6的Map数据结构,因为Map是有序的所以就简单很多，Object是无序的。
*/

var LRUCache1 = function (capacity) {
  this.map = new Map()
  this.size = capacity
};
LRUCache1.prototype.get = function (key) {
  let val = this.map.get(key);
  if (val === undefined) return -1;
  this.map.delete(key); // 因为被用过一次，原有位置删除
  this.map.set(key, val); // 放入最下面表示最新使用
  return val;
};
LRUCache1.prototype.put = function (key, value) {
  if (this.map.has(key)) this.map.delete(key); // 如果有，删除
  this.map.set(key, value); // 放到最下面表示最新使用
  if (this.map.size > this.size) {
    // 迭代器调用next也是顺序返回，所以返回第一个的值就是最老的，找到并删除即可
    this.map.delete(this.map.keys().next().value)
  }
};



/*版本三：构建字典,（用数组来存值，数组的索引表示顺序） */


var LRUCache2 = function (capacity) {
  this.obj = {}
  this.index = 0
  this.size = capacity
};
LRUCache2.prototype.get = function (key) {
  if (this.obj[key] === undefined) {
    return -1
  } else {
    this.index++
    this.obj[key][this.index] = this.obj[key][this.obj[key].length - 1]
    return this.obj[key][this.obj[key].length - 1]
  }
};
LRUCache2.prototype.put = function (key, value) {
  this.index++
  if (this.obj[key]) {
    this.obj[key][this.index] = value;
    return
  }
  let length = 0
  let min = null
  for (let item in this.obj) {
    length++
    if (min) {
      if (min[1].length > this.obj[item].length) {
        min = [item, this.obj[item]]
      }
    } else {
      min = [item, this.obj[item]]
    }
  }
  if (length >= this.size) {
    delete this.obj[min[0]]
  }
  this.obj[key] = [];
  this.obj[key][this.index] = value
};

const a = new LRUCache2(3)
a.put(1, 1)
a.put(2, 2)
a.put(3, 3)
console.log(a.get(1))
a.put(4, 4)
console.log(a)
/*
LRUCache2 {
  obj: {
    '1': [ <1 empty item>, 1, <2 empty items>, 1 ],
    '3': [ <3 empty items>, 3 ],
    '4': [ <5 empty items>, 4 ]
  },
  index: 5,
  size: 3
}
*/