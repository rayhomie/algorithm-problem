/*
给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。
注意:
可以认为区间的终点总是大于它的起点。
区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。

示例 1:
输入: [ [1,2], [2,3], [3,4], [1,3] ]
输出: 1
解释: 移除 [1,3] 后，剩下的区间没有重叠。
示例 2
输入: [ [1,2], [1,2], [1,2] ]
输出: 2
解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
示例 3:
输入: [ [1,2], [2,3] ]
输出: 0
解释: 你不需要移除任何区间，因为它们已经是无重叠的了。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/non-overlapping-intervals
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * 贪心算法：转换思维，我们能最多获得多少个不重叠的区间，也就是说*都选择最早结束的时间点*（贪心常识）
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]); //将区间按照结尾大小来排序
  let count = 1; //必选一个区间（最多可以选择的区间个数）
  intervals.reduce((pre, cur) => {
    if (cur[0] >= pre[1]) {
      //当前开始大于等于前面结束
      count++; //记下可选区间+1
      return cur; //返回当前节点
    } else {
      return pre; //否则返回上一个节点
    }
  });
  return intervals.length - count; //返回总数-选择了的区间个数=移除的区间个数
};

console.log(
  eraseOverlapIntervals([
    [1, 100],
    [11, 22],
    [1, 11],
    [2, 12],
  ])
);
