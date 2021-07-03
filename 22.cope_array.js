/*
https://www.bilibili.com/video/BV1aU4y1b7EJ
六种拷贝数组的方式：
*/

const arr = [1, 2, 3];
//扩展运算符
const arr1 = [...arr];
//Array.from
const arr2 = Array.from(arr);
//slice
const arr3 = arr.slice();
//map
const arr4 = arr.map((i) => i);
//filter
const arr5 = arr.filter(() => true);
//Object.assign
const arr6 = Object.assign([], arr);
//concat
const arr7 = arr.concat([]);
