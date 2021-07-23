const data = [3, 11, 8, 0, -1, 2, 10, 29, 21, 1, 4, 1];

//时间复杂度O(n2)
function selectionSort(arr) {
  var length = arr.length;
  var minIndex, tmp;
  console.time("选择排序耗时");
  for (var i = 0; i < length - 1; i++) {
    minIndex = i; //内循环是为了找出当前最小的值
    for (var j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    //将查询到的最小值交换到当前位置
    tmp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = tmp;
  }
  console.timeEnd("选择排序耗时");
  return arr;
}

console.log(selectionSort(data));
