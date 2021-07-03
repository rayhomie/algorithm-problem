/*
https://www.bilibili.com/video/BV1Qo4y1f7QK
需求：
输入：
["foo.txt", ".bar", "   ", "baz.foo"];
输出：
["~/cool_app/foo.txt", "~/cool_app/.bar", "~/cool_app/baz.foo"];
*/
const files = ["foo.txt", ".bar", "   ", "baz.foo"];

//loops
function forLoops() {
  const result = [];
  for (const file of files) {
    const fileName = file.trim();
    if (fileName) {
      const filePath = `~/cool_app/${fileName}`;
      result.push(filePath);
    }
  }
  return result;
}
console.log(forLoops());

//reduce
function forReduce() {
  return files.reduce((pre, cur) => {
    cur.trim() ? pre.push(`~/cool_app/${cur.trim()}`) : "";
    return pre;
  }, []);
}
console.log(forReduce());

//chain
function forChain() {
  return files
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => `~/cool_app/${item}`);
}
console.log(forChain());
