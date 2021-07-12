var hasCycle = function(head) {
    if(head === null || head.next === null){
      return false
    }
    let slow = head ; fast = head.next

    while(slow){
      if(slow === fast){
        return true
      }

      slow = slow?.next || null
      fast = fast?.next?.next || null
    }
    return false
};