const data = [3, 11, 8, 0, -1, 2, 10, 29, 21, 1, 4, 1];

function BubbleSort(data) {
  console.time("冒泡排序耗时");
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] > data[j]) {
        let temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
  }
  console.timeEnd("冒泡排序耗时");
  return data;
}

console.log(BubbleSort(data));
