/*
https://www.bilibili.com/video/BV14K4y1P7Ho

需求：
const obj = {
  a: null,
  b: false,
  c: true,
  d: 0,
  e: 1,
  f: "",
  g: "a",
  h: [null, false, "", true, 1, "a"],
  i: { j: 0, k: false, l: "a" },
};

输入：
compactObject(obj)
输出：
{ c: true, e: 1, g: "a", h: [true, 1, "a"], i: { l: "a" } }
*/

//方式一：按递归深拷贝的套路实现
function compactObject(obj) {
  function compact(item) {
    debugger;
    let result;
    if (Object.prototype.toString.call(item) === "[object Object]") {
      result = {};
      for (let i in item) {
        let test = compact(item[i]);
        if (test) {
          result[i] = test;
        }
      }
      return result;
    }
    if (Object.prototype.toString.call(item) === "[object Array]") {
      result = [];
      for (let i in item) {
        let test = compact(item[i]);
        if (test) {
          result.push(test);
        }
      }
      return result;
    } else {
      result = item;
      return result;
    }
    // return result;
  }
  return compact(obj);
}
console.log(
  compactObject({
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: "",
    g: "a",
    h: [null, false, "", true, 1, "a"],
    i: { j: 0, k: false, l: "a" },
  })
);

//方式二：
