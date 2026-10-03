/*

Reverse Linked List II


Talk-through: Walk to the node just before position `left` (use a dummy head
so left === 1 doesn't need special-casing). From there, repeatedly pull the
node right after the reversal's start and move it to the front of the
reversed segment — a "head insertion" that avoids tracking a prev pointer
inside the sublist. Do this (right - left) times.

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

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  const dummy = new ListNode(0, head);
  let before = dummy;

  for (let i = 0; i < left - 1; i++) {
    before = before.next!;
  }

  const start = before.next!;
  for (let i = 0; i < right - left; i++) {
    const moved = start.next!;
    start.next = moved.next;
    moved.next = before.next;
    before.next = moved;
  }

  return dummy.next;
}
