/*
https://leetcode-cn.com/problems/min-stack
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。

*/


/**
 * initialize your data structure here.
 * 维护两个栈https://leetcode-cn.com/problems/min-stack/solution/zui-xiao-zhan-by-leetcode-solution/
 */
var MinStack = function () {
  this.arr = []
  this.minArr = []//将当前最小的数同时压入栈
};

/**
 * initialize your data structure here.
 */
 var MinStack = function () {
  this.arr = []
  this.minArr = []//将当前最小的数同时压入栈
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function (val) {
  this.arr.push(val)
  let last=this.minArr[this.minArr.length-1]
  if (last!==undefined && last< val) {
    this.minArr.push(last)
    return
  }
  this.minArr.push(val)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  this.arr.pop()
  this.minArr.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  return this.minArr[this.minArr.length - 1]
};