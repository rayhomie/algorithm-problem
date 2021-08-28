/*
给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

示例 1：
输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]

示例 2：
输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

//方法一：暴力求解
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
};


//方法二：双指针https://leetcode-cn.com/problems/merge-sorted-array/solution/he-bing-liang-ge-you-xu-shu-zu-by-leetco-rrb0/
var merge = function (nums1, m, nums2, n) {
  let p1 = 0, p2 = 0;
  const sorted = new Array(m + n).fill(0);
  var cur;
  while (p1 < m || p2 < n) {//数组1和数组2只要没有遍历完成，就会执行循环
    if (p1 === m) {//当数组1被遍历完，下一次遍历数组2，并取出当前值
      cur = nums2[p2++];
    } else if (p2 === n) {//当数组2被遍历完，下一次遍历数组1，并去除当前值
      cur = nums1[p1++];
    } else if (nums1[p1] < nums2[p2]) {//当数组1的指向小于数组2的指向，则下一次遍历数组1并取出当前值
      cur = nums1[p1++];
    } else {//当数组1的指向大于数组2的指向，则下一次遍历数组2并取出当前值
      cur = nums2[p2++];
    }
    //存放当前值
    sorted[p1 + p2 - 1] = cur;
  }
  for (let i = 0; i != m + n; ++i) {
    //将sorted深拷贝给nums1
    nums1[i] = sorted[i];
  }
};

// 方法三：双指针，nums1的最后往前遍历比较俩个数组的值
var merge = function (nums1, m, nums2, n) {
  // 遍历一遍nums2数组（直到nums2被遍历完，全部放到nums1中）
  while (n > 0) {
    // 双指针进行大小判断并取大赋值，注意m、n为长度
    nums1[m + n - 1] = nums1[m - 1] > nums2[n - 1] ? nums1[--m] : nums2[--n];
  }
};
