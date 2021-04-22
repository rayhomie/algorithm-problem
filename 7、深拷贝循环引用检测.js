/*
js深拷贝以及循环引用检测https://www.bilibili.com/video/BV1kD4y1U7KR?from=search&seid=2871916222466275520

使用Set集合或者使用map哈希表来 循环引用检测。

*/

function deepClone(source) {
  let testCircleSet = new Set();
  let testCircleMap = new Map();
  function _testCircleSet(target) {//使用Set集合来检测循环引用
    if (testCircleSet.has(target)) { throw new Error('循环引用了') };
    testCircleSet.add(target)
  }

  function _testCircleMap(target) {//使用Map集合来检测循环引用
    if (testCircleMap.has(target)) { throw new Error('循环引用了') };
    testCircleMap.set(target, true);
  }

  return function _clone(target) {
    let result
    if (Object.prototype.toString.call(target) === '[object Object]') {
      // _testCircleSet(target)//检测一次
      _testCircleMap(target)
      result = {}
      for (let key in target) {
        result[key] = _clone(target[key])
      }
    }
    if (Object.prototype.toString.call(target) === '[object Array]') {
      // _testCircleSet(target)//检测一次
      _testCircleMap(target)
      result = []
      for (let key in target) {
        result.push(_clone(target[key]))
      }
    } else {
      result = target
    }
    return result
  }(source)
}


const obj = { a: [1, 23, { c: 1 }] }

//此时循环引用了（他儿子是它本身，有点扯淡）
// const obj = { son1: 1 }
// obj.son2 = obj

// const obj = [1]
// obj[2] = obj

console.log(deepClone(obj))