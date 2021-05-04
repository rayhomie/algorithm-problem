/**
 * 分治法https://kaiwu.lagou.com/course/courseInfo.htm?courseId=185#/videoDetail?lessonId=3350
 * 典型案例：二分查找（二分查找需要时有序的数列）
 * 
 * 在一个有序数组中，查找出第一个大于9的数字，假设一定存在。
 * 例如：arr=[-1,3,3,7,10,14,14]；则返回10
 */

var findOver9 = function (arr, num) {
  let l = 0
  let r = arr.length - 1
  let middle = 0
  while (l < r) {
    middle = Math.floor((l + r) / 2)
    if (arr[middle] < num) {
      l = middle + 1
    }
    if (arr[middle] > num) {
      r = middle
    } else {

    }
  }

}