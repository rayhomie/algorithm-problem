/*
https://leetcode-cn.com/problems/reverse-vals-in-k-group/
k个一组翻转链表

给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
k 是一个正整数，它的值小于或等于链表的长度。
如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
进阶：
你可以设计一个只使用常数额外空间的算法来解决此问题吗？
你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
*/
var one, two, three, four, five;
five = {
  val: 5,
  next: null
}
four = {
  val: 4,
  next: five
}
three = {
  val: 3,
  next: four
}
two = {
  val: 2,
  next: three
}
one = {
  val: 1,
  next: two
}

//思路使用栈结构来解决
var reverseKGroup = function (head, k) {
  let cur = head
  let index = 0
  while (cur !== null) {
    index++
    cur = cur.next
  }
  let arr = new Array(Math.ceil(index / k)).fill([]).map(i => [])
  //前面都是遍历一次链表，找出链表长度，再新建一个数组栈结构[[],[],[].....]
  cur = head
  index = 0
  //再遍历一次链表，将值分别压入栈
  while (cur !== null) {
    arr[Math.floor(index / k)][index % k] = cur.val
    index++
    cur = cur.next
  }
  cur = head
  index = 0
  //再遍历一次链表，出栈重新给链表赋值
  let lastlength = arr[arr.length - 1].length
  while (cur !== null) {
    if (
      Math.floor(index / k) === arr.length - 1//遍历到需要出栈的最后一个数组
      && lastlength !== k//判断最后一个需要出栈数组的长度是否和k一样
      && arr.length > 1) {//而且至少需要出栈两次才行
    } else {
      cur.val = arr[Math.floor(index / k)].pop()
    }
    index++
    cur = cur.next
  }
  return head
};

console.log(JSON.stringify(reverseKGroup(one, 2)))