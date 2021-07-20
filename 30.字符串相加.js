/*
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
提示：
num1 和num2 的长度都小于 5100
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**双指针
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1, //指针i
    j = num2.length - 1, //指针j
    add = 0; //保存进位符号
  const ans = []; //结果数组
  while (i >= 0 || j >= 0 || add != 0) {
    //循环条件
    const x = i >= 0 ? +num1.charAt(i) : 0; //当超出字符长度时为0，否则为当前字符
    const y = j >= 0 ? +num2.charAt(j) : 0; //当超出字符长度时为0，否则为当前字符
    const result = x + y + add;
    ans.push(result % 10); //result求余数加到结果数组
    add = result >= 10 ? 1 : 0; //当result大于等于10则进位。
    //同时从右向左移位
    i -= 1;
    j -= 1;
  }
  return ans.reverse().join("");
};
console.log(addStrings("11", "123"));
