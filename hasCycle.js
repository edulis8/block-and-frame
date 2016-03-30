/// hr solution

var hasCycle = function(linkedList){
  var fast = linkedList;
  var slow = linkedList;
  var pause = true;
  
  while (fast = fast.next) {
    if (fast === slow) { return true; }
    if (!pause) { slow = slow.next; }  
    pause = !pause;
  }

  return false;
};

//