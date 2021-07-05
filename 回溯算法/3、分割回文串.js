/*
给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
回文串 是正着读和反着读都一样的字符串。
示例 1：
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
示例 2：
输入：s = "a"
输出：[["a"]]
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindrome-partitioning
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 回溯
 * https://www.bilibili.com/video/BV1c54y1e7k6
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let result = [];
  let current = [];
  //判断回文字符串
  function isPalindrome(x) {
    return x.toString().split("").reverse().join("") === x;
  }
  function backtracking(startIndex) {
    if (startIndex === s.length) {
      //终止条件：递归到最后一位时，将结果压入
      result.push([...current]);
      return;
    }
    for (let i = startIndex; i < s.length; i++) {
      const str = s.substring(startIndex, i + 1); //取当前分割的字符串
      if (isPalindrome(str)) {
        //如果是回文则加入到结果，并递归继续遍历
        current.push(str);
        backtracking(i + 1); //递归继续遍历更深的节点
        current.pop(); //回溯撤销操作
      }
    }
  }
  backtracking(0);
  return result;
};

console.log(partition("aab"));
