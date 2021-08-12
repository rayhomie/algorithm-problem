/*
给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
说明：你不能倾斜容器。

示例 1：
输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
示例 2：

输入：height = [1,1]
输出：1
示例 3：

输入：height = [4,3,2,1,4]
输出：16
示例 4：

输入：height = [1,2,1]
输出：2

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/container-with-most-water
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 双指针法
 * 水槽的实际高度由两板中的短板决定，左右遍历的同时计算出面积，保留最大即可。（移动短板）
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0; //左指针
  let right = height.length - 1; //右指针
  let max = 0; //最大面积
  while (left < right) {
    //当左指针超过右指针时，跳出循环
    if (height[left] <= height[right]) {
      //当左边矮，以矮的进行计算面积
      max = Math.max(height[left] * (right - left), max);
      //将矮的进行指针移动
      left++;
    } else if (height[right] < height[left]) {
      //当右边边矮，以矮的进行计算面积
      max = Math.max(height[right] * (right - left), max);
      //将矮的进行指针移动
      right--;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
