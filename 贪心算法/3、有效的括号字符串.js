/*
给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：
任何左括号 ( 必须有相应的右括号 )。
任何右括号 ) 必须有相应的左括号 ( 。
左括号 ( 必须在对应的右括号之前 )。
* 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
一个空字符串也被视为有效字符串。

示例 1:
输入: "()"
输出: True
示例 2:
输入: "(*)"
输出: True
示例 3:
输入: "(*))"
输出: True
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parenthesis-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 双栈的方式：
 * 作者：alex-wong-9
 * 链接：https://leetcode-cn.com/problems/valid-parenthesis-string/solution/you-xiao-de-gua-hao-zi-fu-chuan-xian-jian-ce-you-g/
 * 来源：力扣（LeetCode）
 * 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 * @param {string} s
 * @return {boolean}
 */

var checkValidString = function (s) {
  let left = [], //用于存储左括号的下标
    star = []; //用于存储星号的下标
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") left.push(i); //遇到左则记录
    if (s[i] == "*") star.push(i); //遇到星号也记录
    if (s[i] == ")") {
      if (left.length == 0) {
        //left栈中没有东西可以出栈时，看star中有无可以出栈。都没有直接返回false
        if (star.length == 0) return false;
        star.pop();
      } else {
        left.pop();
      }
    }
  }
  if (left.length > star.length) return false; //left中的个数比star中多，则没法实现星号来填补，直接返回false
  //star个数比left多，则无所谓，因为星号可以当做空格
  while (left.length && star.length) {
    //将两个栈同时进行出栈，判断左括号下标比星号下标大的话，则直接返回false
    if (left.pop() > star.pop()) return false;
  }
  return true;
};

console.log(checkValidString(""));

/**
 * 贪心算法：
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let low = (high = 0);
  for (let c of s) {
    //遍历字符串
    low += c === "(" ? 1 : -1; //最小的情况下，左括号则low+1,否则则low-1
    high += c !== ")" ? 1 : -1; //最多的情况下，不为左括号或者*则high+1,否则则high-1
    if (high < 0) {
      //左括号和*的个数小于0，则返回false
      return false;
    }
    //low最小为0
    low = Math.max(low, 0);
  }
  return low === 0;
};
