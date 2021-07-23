const data = [3, 11, 8, 0, -1, 2, 10, 29, 21, 1, 4, 1];

function selectionSort(arr) {
  var length = arr.length;
  var minIndex, tmp;
  console.time("选择排序耗时");
  for (var i = 0; i < length - 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    tmp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = tmp;
  }
  console.timeEnd("选择排序耗时");
  return arr;
}

console.log(selectionSort(data));
