/*
假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，
我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

示例 1:
输入: g = [1,2,3], s = [1,1]
输出: 1
解释: 
你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
所以你应该输出1。
示例 2:
输入: g = [1,2], s = [1,2,3]
输出: 2
解释: 
你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
你拥有的饼干数量和尺寸都足以让所有孩子满足。
所以你应该输出2.
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/assign-cookies
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/** 贪心算法
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b); //将孩子先排序
  s.sort((a, b) => a - b); //将饼干排序
  let child = 0, //指针
    cookie = 0; //指针
  while (child < g.length && cookie < s.length) {
    if (g[child] <= s[cookie++]) child++; //饼干值比孩子饥饿度大，则满足
  }
  return child;
};

console.log(findContentChildren([1, 2, 3], [1, 1]));
/** 贪心算法
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  const sortFunc = (a, b) => a - b;
  g.sort(sortFunc);
  s.sort(sortFunc);
  let i = 0;
  s.forEach((n) => {
    //遍历饼干
    if (n >= g[i]) {
      //当饼干值大于当前孩子饥饿度时，孩子+1
      i += 1;
    }
  });
  return i;
};
