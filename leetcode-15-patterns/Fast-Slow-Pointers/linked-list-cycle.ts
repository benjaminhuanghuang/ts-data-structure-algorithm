/*

Linked List Cycle


Talk-through: Floyd's tortoise and hare. Slow moves one step, fast moves two.
If there's a cycle, fast eventually laps slow inside it. If fast reaches the
end (null), there's no cycle.

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

function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
}
