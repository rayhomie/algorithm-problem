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
 * @param {string} s
 * @return {string}
 */
const isPalindrome = (s) => {
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
 * @param {string} s
 * @return {string}
 */
//使用性能更高的回文判断
const isPalindrome1 = (s) => {
  var len = s.length;
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
console.log(
  longestPalindrome1(
    "kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv"
  )
);
