/*
给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
示例:
输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/combinations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * 回溯算法
 * https://www.bilibili.com/video/BV1ti4y1L7cv
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = []; //结果二维数组
  let path = []; //一位数组，存储当前结果
  function com(n, k, startIndex) {
    //startIndex是指当前的开始位置，最初从0开始
    if (path.length === k) {
      //终止条件，当前结果的长度为k时，将其加入二维数组中
      result.push([...path]); //需要深拷贝，否则就相当于push的是指针
      return;
    }
    for (let i = startIndex; i < n; i++) {
      //遍历当前集合
      path.push(i + 1); //将遍历的值加入path
      com(n, k, i + 1); //递归加入下一次遍历的path
      path.pop(); //回溯逻辑：出栈（进行撤销）
    }
  }
  com(n, k, 0);
  return result;
};

/**
 * 回溯算法 + 剪枝
 * https://www.bilibili.com/video/BV1ti4y1L7cv
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = []; //结果二维数组
  let path = []; //一位数组，存储当前结果
  function com(n, k, startIndex) {
    //startIndex是指当前的开始位置，最初从0开始
    if (path.length === k) {
      //终止条件，当前结果的长度为k时，将其加入二维数组中
      result.push([...path]); //需要深拷贝，否则就相当于push的是指针
      return;
    }
    for (
      let i = startIndex;
      i + (k - path.length) < n + 1; //剪枝操作（k-path.length是还需要选取的个数）
      i++
    ) {
      //遍历当前集合
      path.push(i + 1); //将遍历的值加入path
      com(n, k, i + 1); //递归加入下一次遍历的path
      path.pop(); //回溯逻辑：出栈（进行撤销）
    }
  }
  com(n, k, 0);
  return result;
};

console.log(combine(4, 2));
