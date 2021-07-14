/*
实现 int sqrt(int x) 函数。
计算并返回 x 的平方根，其中 x 是非负整数。
由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:
输入: 4
输出: 2
示例 2:
输入: 8
输出: 2
说明: 8 的平方根是 2.82842...,
     由于返回类型是整数，小数部分将被舍去。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sqrtx
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 二分查找
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0 //左指针
  let right = x //右指针
  while (left <= right) {
    let mid = Math.round((right + left) / 2)
    // let mid = (right + left) >> 1
    // >> 1 位运算代替 除2 取整 操作
    // 为什么不写成 mid = (left+right)/2 ,因为考虑到left+right的溢出边界情况
    if (mid * mid > x) {
      right = mid - 1
    } else if (mid * mid < x) {
      left = mid + 1
    } else {
      return mid;
    }
  }
  return right
};

console.log(mySqrt(8))