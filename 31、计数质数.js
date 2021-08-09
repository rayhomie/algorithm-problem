/*统计所有小于非负整数 n 的质数的数量。
示例 1：
输入：n = 10
输出：4
解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。

示例 2：
输入：n = 0
输出：0

示例 3：
输入：n = 1
输出：0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/count-primes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

//解题思路：https://leetcode-cn.com/problems/count-primes/solution/mei-ju-ai-shi-shai-xian-xing-shai-qi-shu-shai-5xin/

//暴力枚举法：（超时）
/*
var countPrimes = function (n) {
  for (var i = 2, r = 0; i < n; i++) isPrime(i) && r++;
  return r;
};
var isPrime = function (n) {
  for (var i = 2; i < n; i++) if (n % i === 0) return false;
  return true;
};
*/

/*
优化思路
因式分解4到8
4: 1 * 4 2 * 2 4 * 1
5: 1 * 5 sqrt(5) * sqrt(5) 5 * 1
6: 1 * 6 2 * 3 sqrt(6) * sqrt(6) 3 * 2 2 * 1
7：1 * 7 sqrt(7) * sqrt(7) 7 * 1
8：1 * 8 2 * 4 sqrt(8) * sqrt(8) 4 * 2 8 * 1
合数和质数的sqrt前后因式一样。以sqrt为界，只要能被前面数整除，该数不是质数
*/

var countPrimes = function (n) {
  for (var i = 2, r = 0; i < n; i++) isPrime(i) && r++;
  return r;
};
var isPrime = function (n) {
  for (var i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
  return true;
};

console.log(countPrimes(499979))