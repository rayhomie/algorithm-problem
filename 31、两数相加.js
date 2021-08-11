/*
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例 1：
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

示例 2：
输入：l1 = [0], l2 = [0]
输出：[0]

示例 3：
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 双指针解法
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var addTwoNumbers = function (l1, l2) {
  let cur1 = l1; //l1的指针
  let cur2 = l2; //l2的指针
  let add = 0; //用于标记进位符
  let result = new ListNode(); //初始化结果链表
  let current = result; //结果链表的指针（用于对结果链表进行操作）
  //当cur1、cur2、add都不为空时进行计算
  while (cur1 || cur2 || add) {
    const sum = ((cur1 && cur1.val) || 0) + ((cur2 && cur2.val) || 0) + add;
    //在算sum时需要注意较短的链表结束时指向为null，需要改为0
    add = sum < 10 ? 0 : 1;
    current.val = sum < 10 ? sum : sum - 10; //将结果计入节点
    if ((cur1 && cur1.next) || (cur2 && cur2.next) || add) {
      //当下一位有值时才创建新链表节点（[2,4,3][5,6,4]=>[7,0,8,0]否则最后要多一个0）
      current.next = new ListNode();
    }
    //同时移动指针
    current = current.next;
    cur1 = cur1 && cur1.next;
    cur2 = cur2 && cur2.next;
  }
  return result;
};
