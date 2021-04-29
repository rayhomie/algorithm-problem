/*
  爬楼梯https://leetcode-cn.com/problems/climbing-stairs/
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。
示例 1：
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
*/

/**
 * @param {number} n
 * @return {number}
 * 思路：首先我们找规律（找到递推公式）
 * 1->1
 * 2->2
 * 3->3
 * 4->5
 * 5->8
 * ...
 * 由此规律可以找出递推公式是一个斐波那契数列：
 * f(n)=f(n-1)+f(n-2)其中n>2
 * 下面的普通递归函数超时。
 */
var climbStairs = function (n) {
  if (n == 1) return 1
  if (n == 2) return 2
  //进入递归后会把函数还保存在栈中。容易栈溢出
  return climbStairs(n - 1) + climbStairs(n - 2)
};

//尾递归
var climbStairs1 = function (n, f0 = 0, f1 = 1) {
  if (!n) {
    return f1
  }
  //一次递归则计算完成，直接出栈
  return climbStairs1(n - 1, f1, f1 + f0)
};
console.log(climbStairs1(4))