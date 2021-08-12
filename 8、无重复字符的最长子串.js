/*
    8、无重复字符的最长子串
    https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
示例 1:
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
示例 4:
输入: s = ""
输出: 0
 */

/**
 * @param {string} s
 * @return {number}
  使用队列来实现滑动窗口。
 */
var lengthOfLongestSubstring = function (s) {
  let arr = [],
    max = 0;
  for (let i = 0; i < s.length; i++) {
    //将数组遍历
    let index = arr.indexOf(s[i]); //判断是否arr中存在当前值
    if (index !== -1) {
      //如果存在就把数组中的该值以及之前的都删掉
      arr.splice(0, index + 1);
    }
    //将遍历数组的每个值都push进到arr
    arr.push(s[i]);
    max = Math.max(arr.length, max); //存储最大值长度值
  }
  return max;
};

var lengthOfLongestSubstring1 = function (s) {
  let max = 0;
  const map = new Map(); //使用map的键来存值，map的值来存下标
  for (let i = 0, j = 0; i < s.length; i++) {
    //将数组遍历
    if (map.has(s[i])) {
      //使用i来遍历数组，j来存重复的下一个值（这里使用j就有一个使用索引的截取功能）
      j = Math.max(map.get(s[i]) + 1, j); //一定要取更大的那个j避免j就回到之前的重复位置
    }
    map.set(s[i], i); //将每个值都放进map
    max = Math.max(i - j + 1, max); //存储最大值长度值
  }
  return max;
};

/*【解法二】滑动窗口
其实可以通过观察可以优化，我们制作一个窗口，让窗口中的字符串满足题目要求（无重复）
怎么让他满足要求呢？ 那就要滑动窗口了，循环去掉左边第一个元素，直到窗口中元素无重复，此时再扩大窗口
滑动窗口有两个关键点：扩张 + 收缩
首先（右指针）扩张到滑动窗口不满足条件的时候暂停，
（左指针）开始收缩窗口，让窗口满足条件后再进行扩张（右指针）
https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/tong-su-yi-dong-cong-bao-li-dao-hua-dong-cucu/
*/

//滑动窗口写法一：
function lengthOfLongestSubstring2(s) {
  let len = s.length;
  let result = 0;
  let set = new Set();
  // 左指针用来收缩窗口
  let left = 0;
  // 右指针用来扩张窗口
  let right = 0;

  while (left < len) {
    // 如果不重复，就不断扩张窗口，元素添加到set中
    while (right < len && !set.has(s[right])) {
      set.add(s[right]);
      right++;
    }
    // 到这里说明有元素重复了，先记录子串长度，然后收缩窗口
    result = Math.max(result, right - left);
    // 收缩窗口
    set.delete(s[left]);
    left++;
  }
  return result;
}

//滑动窗口写法二：（执行时间更长，性能更差）
var lengthOfLongestSubstring3 = function (s) {
  if (!s.length) return 0;
  let res = 1;
  for (let i = 0; i < s.length; i++) {
    let a = new Set();
    r = i;
    while (r < s.length && !a.has(s[r])) {
      a.add(s[r]);
      r++;
    }
    res = Math.max(res, a.size);
  }
  return res;
};

console.log(lengthOfLongestSubstring1("axczarddq"));
