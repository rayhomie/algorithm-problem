/*
给你一个字符串 s，找到 s 中最长的回文子串。

示例 1：
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

示例 2：
输入：s = "cbbd"
输出："bb"

示例 3：
输入：s = "a"
https://leetcode-cn.com/problems/longest-palindromic-substring/

/**
 * 暴力枚举法（超时，需要去枝优化）o(n3)
 * 运行时间：1.775s
 * @param {string} s
 * @return {string}
 */
const isPalindrome = (s) => {
  //这样判断回文数会将整个数遍历一次才能判断出
  return s.split("").reverse().join("") === s;
};
const longestPalindrome = (s) => {
  let max = "";
  for (var i = 0; i < s.length; i++) {
    let j = i + 1;
    while (j <= s.length) {
      let curStr = s.slice(i, j); //slice对字符串进行操作性能比substring要差得多!!!
      if (curStr.length > max.length && isPalindrome(curStr)) {
        max = curStr;
      }
      j++;
    }
  }
  return max;
};

/**
 * 暴力枚举法（优化！！！）o(n3)
 * 运行时间：0.152s
 * @param {string} s
 * @return {string}
 */
//使用性能更高的回文判断
const isPalindrome1 = (s) => {
  var len = s.length;
  //这样判断回文数可以减少遍历
  for (let i = 0; i < len / 2; i++) {
    if (s.charAt(i) != s.charAt(len - i - 1)) {
      return false;
    }
  }
  return true;
};
const longestPalindrome1 = (s) => {
  let max = "";
  for (var i = 0; i < s.length; i++) {
    let j = i + 1;
    while (j <= s.length) {
      let curStr = s.substring(i, j); //slice对字符串进行操作性能比substring要差得多!!!
      if (curStr.length > max.length && isPalindrome1(curStr)) {
        max = curStr;
      }
      j++;
    }
  }
  return max;
};

/**
 * 中心扩散法
 * @param {string} s
 * @return {string}
 */

const longestPalindrome2 = (s) => {
  if (s.length < 2) {
    return s;
  }
  let max = "";
  for (var i = 0; i < s.length; i++) {
    // 回文子串长度是奇数
    helper(i, i);
    // 回文子串长度是偶数
    helper(i, i + 1);
  }
  function helper(m, n) {
    while (m >= 0 && n < s.length && s[m] === s[n]) {
      m--;
      n++;
    }
    // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻
    // 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间  长度是n-m-1
    // slice也要取[m+1,n-1]这个区间
    max = n - m - 1 > max.length ? s.substring(m + 1, n) : max;
  }
  return max;
};

/**
 * 中心扩散法(终极优化)
 * @param {string} s
 * @return {string}
 */

const longestPalindrome3 = (s) => {
  if (s.length < 2) {
    return s;
  }
  let l = 0;
  let r = 0;
  for (var i = 0; i < s.length; i++) {
    // 回文子串长度是奇数
    helper(i, i);
    // 回文子串长度是偶数
    helper(i, i + 1);
  }
  function helper(m, n) {
    while (m >= 0 && n < s.length && s[m] === s[n]) {
      m--;
      n++;
    }
    // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻 如果此轮询得到回文串长度大于之前记录， 记录此轮循边界
    if (n - m - 1 > r - l - 1) {
      r = n;
      l = m;
    }
  }
  return s.substring(l + 1, r);
};

console.log(
  longestPalindrome2(
    "kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv"
  )
);
