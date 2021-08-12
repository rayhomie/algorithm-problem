/*
输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

示例：
给定一个链表: 1->2->3->4->5, 和 k = 2.
返回链表 4->5.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 方法一：栈
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let current = head;
  const stack = [];
  //将指向所有节点的指针指向存到栈中
  while (current) {
    stack.push(current);
    current = current.next;
  }
  let result;
  //出栈k个，出栈的值即结果
  for (let i = 0; i < k; i++) {
    result = stack.pop();
  }
  return result;
};

/**
 * 方法二：双指针（快慢指针）
 * https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/solution/kuai-man-zhi-zhen-zhe-ge-fang-fa-zhen-de-u517/
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let slow = head;
  let fast = head;
  //先让快指针走k步
  while (k-- > 0) {
    fast = fast.next;
  }
  //再使快慢指针同时前进，当快指针到底时同时停止，慢指针的指向即结果
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};
