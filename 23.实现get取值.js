/*
https://www.bilibili.com/video/BV1Vp4y1b7cf
需求
输入：
const obj = {
  selector: { to: { val: "val to select" } },
  target: [1, [2, 3, 4], { a: "test" }],
};
get(obj, "selector.to.val", "target[0]", "target[1][1]", "target[2].a");

输出：
["val to select", 1, 2, "test"];
*/

const obj = {
  selector: { to: { val: "val to select" } },
  target: [1, [2, 3, 4], { a: "test" }],
};

function get(obj, ...args) {
  function handle(str) {
    return str //将字符串进行处理
      .split(".")
      .map((i) => i.split("[").map((i) => i.split("]").join("")))
      .flat() //需要数组扁平化
      .reduce((pre, key) => {//这里有个小技巧，使用reduce实现层次对象读取值
        //开始访问对象取值
        return pre[key];
      }, obj);
  }
  return args.map(handle);
}

console.log(
  get(obj, "selector.to.val", "target[0]", "target[1][1]", "target[2].a")
);
