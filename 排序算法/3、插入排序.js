const data = [3, 11, 8, 0, -1, 2, 10, 29, 21, 1, 4, 1];

//时间复杂度O(n2)
function insertionSort(arr) {
  console.time("插入排序耗时");
  for (var i = 0; i < arr.length; i++) {
    //遍历一次数组
    var key = arr[i]; //当前的值
    var j = i - 1; //i前面一个索引
    while (j >= 0 && arr[j] > key) {
      //找到插入位置，并将该位置后面的全部右移
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key; //将值插入该位置
  }
  console.timeEnd("插入排序耗时");
  return arr;
}

console.log(insertionSort(data));
