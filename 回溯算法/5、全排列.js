/*
    全排列https://leetcode-cn.com/problems/permutations/

给定一个 没有重复 数字的序列，返回其所有可能的全排列。
示例:
输入: [1,2,3,5,8,9]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/**
 * https://www.bilibili.com/video/av9830088
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute1 = function (nums) {
  const res = []
  function _swap(nums, a, b) {//把遍历到的数但在第一位
    let temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
  }
  function _permute(nums, p, q) {//p表示左临界，q表示右临界
    if (p === q) {
      res.push([...nums])//需要拷贝一次
      return
    }
    for (let i = p; i <= q; i++) {//这一步的作用是选择谁来当头
      _swap(nums, p, i)//将遍历到那位交换到第一位
      _permute(nums, p + 1, q)//递归
      _swap(nums, p, i)//在i进入下一位的时候需要把值交换回来。(还原数组，避免重复)
    }
  }

  _permute(nums, 0, nums.length - 1)

  return res

};
// console.log(permute1([1, 2, 3, 4]))

/*
解法二：深度优先遍历+栈回溯算法
https://leetcode-cn.com/problems/permutations/solution/chou-xiang-cheng-jue-ce-shu-yi-ge-pai-lie-jiu-xian/
*/
const permute = (nums) => {
  const res = [];
  const used = {};

  function dfs(path) {
    if (path.length == nums.length) { // 个数选够了
      res.push(path.slice()); // 拷贝一份path，加入解集res
      return;                 // 结束当前递归分支
    }
    for (const num of nums) { // for枚举出每个可选的选项
      // if (path.includes(num)) continue; // 别这么写！查找的时间是O(n)，增加时间复杂度
      if (used[num]) continue; // 使用过的，跳过
      path.push(num);         // 选择当前的数，加入path
      used[num] = true;       // 记录一下 使用了
      dfs(path);              // 基于选了当前的数，递归
      path.pop();             // 上一句的递归结束，回溯，将最后选的数pop出来
      used[num] = false;      // 撤销这个记录
    }
  }

  dfs([]); // 递归的入口，空path传进去
  return res;
};

console.log(permute([1, 2, 3, 4]))