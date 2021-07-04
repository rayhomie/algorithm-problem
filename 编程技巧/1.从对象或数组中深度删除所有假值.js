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
      // return result;
    } else if (Object.prototype.toString.call(item) === "[object Array]") {
      //注意这里是else if，否则最后的else逻辑错了
      result = [];
      for (let i in item) {
        let test = compact(item[i]);
        if (test) {
          result.push(test);
        }
      }
      // return result;
    } else {
      result = item;
      // return result;
    }
    return result;
  }
  return compact(obj);
}

//方式二：使用reduce

function compactObject(val) {
  const data = Array.isArray(val) ? val.filter(Boolean) : val;
  return Object.keys(data).reduce(
    (acc, key) => {
      const value = data[key];
      if (value) {
        acc[key] = typeof value === "object" ? compactObject(value) : value;
      }
      return acc;
    },
    Array.isArray(data) ? [] : {}
  );
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

