/*
给出非负整数数组 A ，返回两个非重叠（连续）子数组中元素的最大和，子数组的长度分别为 L 和 M。（这里需要澄清的是，长为 L 的子数组可以出现在长为 M 的子数组之前或之后。）
从形式上看，返回最大的 V，而 V = (A[i] + A[i+1] + ... + A[i+L-1]) + (A[j] + A[j+1] + ... + A[j+M-1]) 并满足下列条件之一：
0 <= i < i + L - 1 < j < j + M - 1 < A.length, 或
0 <= j < j + M - 1 < i < i + L - 1 < A.length.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-sum-of-two-non-overlapping-subarrays
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

示例：
输入：A = [0,6,5,2,2,5,1,9,4], L = 1, M = 2
输出：20
解释：子数组的一种选择中，[9] 长度为 1，[6,5] 长度为 2。
*/

//滑动窗口暴力求解
var maxSumTwoNoOverlap = function (nums, firstLen, secondLen) {
  let max = 0;
  for (let i = firstLen; i <= nums.length; i++) {
    //第一次循环，截取数组
    let arr1 = nums.slice(i - firstLen, i);
    //找到当前截取数组之前的部分
    let rest1 = nums.slice(0, i - firstLen);
    //找到当前截取数组之后的部分
    let rest2 = nums.slice(i, nums.length);
    //分别在循环一次之前部分、之后部分，进行查找最大值即可
    secondFun(rest1);
    secondFun(rest2);
    function secondFun(rest) {
      if (rest.length < secondLen) return;
      for (let j = secondLen; j <= rest.length; j++) {
        let arr2 = rest.slice(j - secondLen, j);
        sum =
          arr1.reduce((pre, cur) => cur + pre) +
          arr2.reduce((pre, cur) => cur + pre);
        if (max < sum) {
          max = sum;
        }
      }
    }
  }
  return max;
};

console.log(maxSumTwoNoOverlap([8, 20, 6, 2, 20, 17, 6, 3, 20, 8, 12], 5, 4));
