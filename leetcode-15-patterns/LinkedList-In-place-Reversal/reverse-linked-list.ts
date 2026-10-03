/*

Reverse Linked List


Talk-through: Walk the list once, rewiring each node's next pointer to point
backward instead of forward. Keep a prev pointer (starts null) and a temp to
hold the next node before overwriting it, otherwise the rest of the list is
lost once next is reassigned.

Time big O of n, space big O of 1.
*/
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;

  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
