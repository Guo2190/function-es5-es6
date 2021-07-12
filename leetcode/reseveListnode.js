var reverseList = function(head) {
  let pre = null , cur = head, next = null

  while(cur !== null){
    next = cur.next 
    cur.next = pre
    cur = next
    pre = cur
  }
  return pre
};