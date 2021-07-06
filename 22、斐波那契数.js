/*
斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
F(0) = 0，F(1) = 1
F(n) = F(n - 1) + F(n - 2)，其中 n > 1
给你 n ，请计算 F(n) 。
示例 1：
输入：2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1
示例 2：
输入：3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2
示例 3：
输入：4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fibonacci-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 递归
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0
  if (n === 1) return 1
  return fib(n - 1) + fib(n - 2)
};

/**
 * 递归 + 哈希表剪枝
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let map = {}
  return handle(n, map)
};
var handle = function (n, map) {
  if (n === 0) return 0
  if (n === 1) return 1
  if (map[n]) {
    return map[n];
  }
  let res = handle(n - 1, map) + handle(n - 2, map)
  map[n] = res
  return res
}
/**
 * 解法三：动态规划
 * @param {number} n
 * @return {number}
 */
function fib(n) {
  if (n === 0) {
    return 0;
  }
  const dp = new Array(n);
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
