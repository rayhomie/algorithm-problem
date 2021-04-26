/*
  有效的括号https://leetcode-cn.com/problems/valid-parentheses/
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
示例 1：
输入：s = "()"
输出：true
示例 2：
输入：s = "()[]{}"
输出：true
示例 3：
输入：s = "(]"
输出：false
示例 4：
输入：s = "([)]"
输出：false
示例 5：
输入：s = "{[]}"
输出：true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
//使用栈来实现
var isValid = function (s) {
  let stack = []
  const map = {
    ')': '(',
    '}': '{',
    ']': '[',
    '[': true,
    '(': true,
    '{': true,
  }
  let len = s.length
  if (len % 2) return false//重要的优化
  for (let item of s) {
    if (stack[stack.length - 1] === map[item]) {
      stack.pop()
      continue
    }
    stack.push(item)
  }
  return stack.length === 0
};

console.log(isValid("[]"))