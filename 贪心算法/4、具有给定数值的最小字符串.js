/*
小写字符 的 数值 是它在字母表中的位置（从 1 开始），因此 a 的数值为 1 ，b 的数值为 2 ，c 的数值为 3 ，以此类推。
字符串由若干小写字符组成，字符串的数值 为各字符的数值之和。例如，字符串 "abe" 的数值等于 1 + 2 + 5 = 8 。
给你两个整数 n 和 k 。返回 长度 等于 n 且 数值 等于 k 的 字典序最小 的字符串。
注意，如果字符串 x 在字典排序中位于 y 之前，就认为 x 字典序比 y 小，有以下两种情况：
x 是 y 的一个前缀；
如果 i 是 x[i] != y[i] 的第一个位置，且 x[i] 在字母表中的位置比 y[i] 靠前。

示例 1：
输入：n = 3, k = 27
输出："aay"
解释：字符串的数值为 1 + 1 + 25 = 27，它是数值满足要求且长度等于 3 字典序最小的字符串。
示例 2：
输入：n = 5, k = 73
输出："aaszz"
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/smallest-string-with-a-given-numeric-value
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * https://leetcode-cn.com/problems/smallest-string-with-a-given-numeric-value/solution/ju-you-gei-ding-shu-zhi-de-zui-xiao-zi-f-6cdq/
 * 贪心算法
 * 先各位全部填充a，保证位数，再从最后一位向前推：
 * 第一步：先定义一个长度为n的数组，给每一位上都填充上字符a；
 * 第二步：k - n 就是每一位都是a的时候还差多少；
 * 第三步：从最后一位（即n-1）开始，从后往前来分余下的k - n；
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

var getSmallestString = function (n, k) {
  // k - n 每一位都是a的时候还差多少;i是下一个要进行填充的位
  let res = Array(n).fill("a"),
    remain = k - n, //剩下多少没有分配的值
    i = n - 1; //最后一位的索引
  while (remain) {
    if (remain > 25) {
      // 当前位无法填充完
      remain -= 25; //此时还有剩，继续循环
      res[i] = "z";
      i--; //进入前一位
    } else {
      // 当前位可以填充完剩余的值
      res[i] = String.fromCharCode(97 + remain);
      remain = 0; //结束循环
    }
  }
  return res.join("");
};

console.log(getSmallestString(3, 27));
