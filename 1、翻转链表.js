/*
  翻转链表：
    输入：1->2->3->4->5->null
    输出：5->4->3->2->1->null
    请用迭代和递归的方法实现
*/

var one, two, three, four, five;
five = {
  node: 5,
  next: null
}
four = {
  node: 4,
  next: five
}
three = {
  node: 3,
  next: four
}
two = {
  node: 2,
  next: three
}
one = {
  node: 1,
  next: two
}


//迭代法：
//通过外部变量pre指针来保存上一次修改的节点。（当然第一次pre为null）
//通过cur指针来访问链表
//再使用变量temp来保留当前节点指向修改前的指向
function iterator(root) {
  let pre = null
  let cur = root
  while (cur.next != null) {
    let temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  cur.next = pre
  return cur
}

// console.log(JSON.stringify(iterator(one)))
//{"node":5,"next":{"node":4,"next":{"node":3,"next":{"node":2,"next":{"node":1,"next":null}}}}}


//借助栈：
//通过第一次遍历入栈记录链表节点值，再遍历一次出栈，再将每次出栈结果赋给原链表的节点
function stack(root) {
  let arr = []
  let cur = root
  while (cur != null) {
    arr.push(cur.node)
    cur = cur.next
  }
  cur = root
  while (cur != null) {
    cur.node = arr.pop()
    cur = cur.next
  }
  return root
}
// console.log(JSON.stringify(stack(one)))
//{"node":5,"next":{"node":4,"next":{"node":3,"next":{"node":2,"next":{"node":1,"next":null}}}}}


//递归法：
//思路和遍历法基本一致
function recursive(root) {
  let pre = null
  function rec(cur) {
    if (cur === null) {
      return
    }
    let temp = cur.next
    cur.next = pre
    pre = cur
    rec(temp)
  }
  rec(root)
  return pre
}
// console.log(JSON.stringify(recursive(one)))
//{"node":5,"next":{"node":4,"next":{"node":3,"next":{"node":2,"next":{"node":1,"next":null}}}}}
