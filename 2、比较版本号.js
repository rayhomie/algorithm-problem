/*
  比较版本号题目：https://leetcode-cn.com/problems/compare-version-numbers/
    给你两个版本号version1和version2，请你比较他们。
    如果 version1 > version2 返回 1，
        如果 version1 < version2 返回 -1，
        除此之外返回 0。
示例 1：
输入：version1 = "1.01", version2 = "1.001"
输出：0
解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"

示例 2：
输入：version1 = "1.0", version2 = "1.0.0"
输出：0
解释：version1 没有指定下标为 2 的修订号，即视为 "0"

示例 3：
输入：version1 = "0.1", version2 = "1.1"
输出：-1
解释：version1 中下标为 0 的修订号是 "0"，version2 中下标为 0 的修订号是 "1" 。0 < 1，所以 version1 < version2

示例 4：
输入：version1 = "1.0.1", version2 = "1"
输出：1

示例 5：
输入：version1 = "7.5.2.4", version2 = "7.5.3"
输出：-1
*/

function compareVersions(version1, version2) {
  //消除前导0
  const version1Arr = delPreZero(version1).map((i) => (i === "" ? "0" : i));
  const version2Arr = delPreZero(version2).map((i) => (i === "" ? "0" : i));
  //找出更长的那个数组的长度
  const longerArr =
    version1Arr.length > version2Arr.length ? version1Arr : version2Arr;
  // console.log(version1Arr, version2Arr)
  //进行一次遍历
  for (let i = 0; i < longerArr.length; i++) {
    //当数组不能取出值时，置零
    if (version1Arr[i] === undefined) {
      version1Arr[i] = 0;
    }
    if (version2Arr[i] === undefined) {
      version2Arr[i] = 0;
    }
    //判断大小同权重数的大小，并直接返回
    if (+version1Arr[i] > +version2Arr[i]) {
      return 1;
    }
    if (+version1Arr[i] < +version2Arr[i]) {
      return -1;
    }
    //如果最后一位数也相等则才返回（相等的信号）
    if (i === longerArr.length - 1 && +version1Arr[i] === +version2Arr[i]) {
      return 0;
    }
  }
}

function delPreZero(version) {
  //消除前导0
  return version.split(".").map((i) =>
    Array.from(i).reduce((pre, cur) => {
      if (cur === "0" && pre === "") {
        return pre;
      }
      if (cur !== "0" || pre !== "") {
        pre = pre + cur;
        return pre;
      }
    }, "")
  );
}

console.log(compareVersions("1.2", "01.10"));

function compareVersions2(version1, version2) {
  const arr1 = getArr(version1);
  const arr2 = getArr(version2);
  const max = Math.max(arr1.length, arr2.length); //最大的长度
  for (let i = 0; i < max; i++) {
    if (arr1[i] === undefined) {
      //取不出值则置零
      arr1[i] = 0;
    }
    if (arr2[i] === undefined) {
      //取不出值则置零
      arr2[i] = 0;
    }
    if (arr1[i] > arr2[i]) {
      return 1;
    } else if (arr1[i] < arr2[i]) {
      return -1;
    }
    if (arr1[i] === arr2[i] && i === max - 1) {
      //循环到最后一个时相等则返回0
      return 0;
    }
  }
}
//清楚前导0
function getArr(version) {
  return version.split(".").map((i) => +i);
}

console.log(compareVersions2("1.0.1", "01"));
