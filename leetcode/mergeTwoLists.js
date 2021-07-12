var mergeTwoLists = function (l1, l2) {   
  let head = new ListNode();  
  let pre = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      pre.next = l1;
      l1 = l1.next;
    } else {
      pre.next = l2;
      l1 = l2.next;
    }
    pre = pre.next;
  }
  if (l1) {
    pre.next = l1
  }
  if (l2 ) {
    pre.next = l2
  }
  return head.next;
};

var mergeTwoLists = function(l1, l2) {
  var head=new ListNode();
  var h=head;
  while(l1&&l2){
      if(l1.val<l2.val){
          head.next=l1;
          l1=l1.next;
      }else{
          head.next=l2;
          l2=l2.next;
      }
      head=head.next;
  }
  if(l1) head.next=l1;
  if(l2) head.next=l2;
  return h.next;
  };
  