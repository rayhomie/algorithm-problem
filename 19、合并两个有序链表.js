/*
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
示例 1：
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
示例 2：
输入：l1 = [], l2 = []
输出：[]
示例 3：
输入：l1 = [], l2 = [0]
输出：[0]
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-two-sorted-lists
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
 * 双指针法
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  let result = new ListNode(); //创建一个空链表储存结果，第一个节点值为0
  let current = result; //使用current来访问结果链表
  while (l1 != null && l2 != null) {
    //同时访问l1和l2链表
    if (l1.val < l2.val) {
      //当前l1节点值<当前l2节点值时，将l1存入结果链表中。并继续遍历l1
      current.next = l1;
      l1 = l1.next;
    } else {
      //否则存l2,并遍历l2
      current.next = l2;
      l2 = l2.next;
    }
    //current始终指向result数组的尾部
    current = current.next;
  }
  //并没有访问完，剩下一个l1或者l2节点未访问完毕
  current.next = l1 === null ? l2 : l1;
  return result.next; //因为result创建的时候第一个节点值为0（没用意义），所以需要返回第一个节点后面的所有节点
};
