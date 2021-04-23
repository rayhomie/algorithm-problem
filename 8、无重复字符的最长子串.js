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
  let arr = [], max = 0
  for (let i = 0; i < s.length; i++) {//将数组遍历
    let index = arr.indexOf(s[i])//判断是否arr中存在当前值
    if (index !== -1) {//如果存在就把数组中的该值以及之前的都删掉
      arr.splice(0, index + 1);
    }
    //将遍历数组的每个值都push进到arr
    arr.push(s[i])
    max = Math.max(arr.length, max)//存储最大值长度值
  }
  return max
};

var lengthOfLongestSubstring1 = function (s) {
  let max = 0
  const map = new Map()//使用map的键来存值，map的值来存下标
  for (let i = 0, j = 0; i < s.length; i++) {//将数组遍历
    if (map.has(s[i])) {//使用i来遍历数组，j来存重复的下一个值（这里使用j就有一个使用索引的截取功能）
      j = Math.max(map.get(s[i]) + 1,j)//一定要取更大的那个j避免j就回到之前的重复位置
    }
    map.set(s[i], i)//将每个值都放进map
    max = Math.max(i - j + 1, max)//存储最大值长度值
  }
  return max
};




console.log(lengthOfLongestSubstring1("bb123b"))