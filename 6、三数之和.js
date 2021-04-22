/*三数之和https://leetcode-cn.com/problems/3sum
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。
示例 1：
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：
输入：nums = []
输出：[]
示例 3：
输入：nums = [0]
输出：[]
*/
/**
 * 暴力求解O(n3)超时
 */
var threeSum = function (nums) {
  const length = nums.length;
  if ([0, 1, 2].includes(length)) {
    return []
  }
  let res = []
  let strArr = []
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (j !== i) {
        for (let c = 0; c < length; c++) {
          if (nums[i] + nums[c] + nums[j] === 0 && c !== i && j !== c) {
            let curRes = [nums[i], nums[c], nums[j]]
            let min = Math.min(...curRes)
            let max = Math.max(...curRes)
            let str = min.toString() + (0 - min - max).toString() + max.toString()
            if (!strArr.includes(str)) {
              strArr.push(str)
              res.push([nums[i], nums[c], nums[j]])
            }
          }
        }
      }

    }
  }
  return res
};

/*
排序+双指针优化：使用字符串来去重复（推荐）
1.先将数组排序，为了后面明确数组左右指针指向的值大小
2.首先我们需要for遍历一次数组
3.在for循环中使用左右双指针进行循环判断
[-3,-2,-1,0,0,1,2,4]
第一次遍历x指向-3，左指针i指向-2（x后面的一个数），右指针j指向4（最后一个数）
当三个数之和=0，即加入到res中，并且将结果的键值对放出字典中。
当三个数之和>0，即右指针左移动。否则左指针向右移动。

作者：rayhomie
链接：https://leetcode-cn.com/problems/3sum/solution/pai-xu-shuang-zhi-zhen-ha-xi-zi-dian-qu-9ke0t/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

var threeSum1 = function (nums) {
  const length = nums.length;
  if ([0, 1, 2].includes(length)) {
    return []
  }
  nums.sort((a, b) => a - b)
  let strArr = {}//使用字典，判断更快
  console.log(nums)
  let res = []
  for (let x = 0; x < length - 2; x++) {
    if (nums[x] > 0) break;//最左边的都大于0，则直接跳出
    if (x > 0 && nums[x] == nums[x - 1]) continue;
    //当x的后一个值和当前值一样的时候直接跳出本次循环
    let i = x + 1
    let j = length - 1
    while (i < j) {
      if (nums[i] + nums[j] + nums[x] === 0) {
        if (!strArr[`${nums[x]}${nums[i]}${nums[j]}`]) {
            //去重：本来[nums[x], nums[i], nums[j]]就是排过序的。
            //所以使用将他们的字符串拼接作为对象的key，即可判断之前是否已有重复。
          res.push([nums[x], nums[i], nums[j]])
          strArr[`${nums[x]}${nums[i]}${nums[j]}`] = 1
        }
        j--
        i++
      }
      if (nums[i] + nums[j] + nums[x] > 0) {
        j--
      }
      if (nums[i] + nums[j] + nums[x] < 0) {
        i++
      }
    }

  }
  return res
};
console.log(threeSum1([-2, 0, 1, 1, 2]))

/*
排序+双指针优化：使用字符串来去重复，循环去重
*/
var threeSum2 = function (nums) {
  const length = nums.length;
  if ([0, 1, 2].includes(length)) {
    return []
  }
  nums.sort((a, b) => a - b)
  console.log(nums)
  let res = []
  for (let x = 0; x < length - 2; x++) {
    if (nums[x] > 0) break;//最左边的都大于0，则直接跳出
    if (x > 0 && nums[x] == nums[x - 1]) continue;//[0,0,0,0]
    let i = x + 1
    let j = length - 1
    while (i < j) {
      if (nums[i] + nums[j] + nums[x] === 0) {
        res.push([nums[x], nums[i], nums[j]])
        while (i < j && nums[i] == nums[i + 1]) i++; // 去重
        while (i < j && nums[j] == nums[j - 1]) j--; // 去重
        i++;
        j--;
        // break
      }
      if (nums[i] + nums[j] + nums[x] > 0) {
        j--
      }
      if (nums[i] + nums[j] + nums[x] < 0) {
        i++
      }

    }

  }
  return res
};