/*
 从左右两边向中间推进的时候，遇到不符合的数就两边交换值。
*/
const data = [3, 11, 8, 0, -1, 2, 10, 29, 21, 1, 4, 1];

var quickSort = function (nums) {
  function rank(left, right) {
    if (left >= right) return; //终止条件
    let flag = nums[right]; //任意找一个标志位
    let i = left; //左指针
    let j = right - 1; //右指针
    while (i <= j) {
      while (i <= j && nums[i] < flag) {
        i++;
      }
      while (i <= j && nums[j] > flag) {
        j--;
      }
      if (i <= j) {
        //将比标志位，小的数放左边，大的数放右边
        let tem1 = nums[i];
        nums[i] = nums[j];
        nums[j] = tem1;
        i++;
        j--;
      }
    }
    //将标志位和界限位置交换
    let tem = nums[i];
    nums[i] = nums[right];
    nums[right] = tem;

    rank(left, i - 1);
    rank(i + 1, right);
  }
  rank(0, nums.length - 1);
  return nums;
};

console.log(quickSort(data));
