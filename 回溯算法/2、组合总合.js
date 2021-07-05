/*
给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
candidates 中的数字可以无限制重复被选取。
说明：
所有数字（包括 target）都是正整数。
解集不能包含重复的组合。 
示例 1：
输入：candidates = [2,3,6,7], target = 7,
所求解集为：
[
  [7],
  [2,2,3]
]
示例 2：
输入：candidates = [2,3,5], target = 8,
所求解集为：
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/combination-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 回溯算法 + 剪枝
 * https://www.bilibili.com/video/BV1KT4y1M7HJ
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];
  let path = [];
  function combine(startIndex) {
    //startIndex是当前层次遍历的索引值（用于组合去重）
    const sum = [...path].reduce((p, c) => p + c, 0); //求和
    if (target < sum) return; //减少递归次数
    if (target === sum) {
      result.push([...path]); //记录结果
      return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
      path.push(candidates[i]); //将当前值
      combine(i); //下一层递归循环时，从i当前索引开始，进行组合去重
      path.pop(); //撤销操作
    }
  }
  combine(0);
  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
