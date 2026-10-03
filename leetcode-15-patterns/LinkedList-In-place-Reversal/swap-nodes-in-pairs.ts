/*

Swap Nodes in Pairs


Talk-through: Use a dummy head so the first pair swap doesn't need special
casing. For each pair, rewire: prev -> second -> first -> rest, then advance
prev to `first` (now the back of the swapped pair) for the next iteration.

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

function swapPairs(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(0, head);
  let prev = dummy;

  while (prev.next !== null && prev.next.next !== null) {
    const first = prev.next;
    const second = first.next!;

    first.next = second.next;
    second.next = first;
    prev.next = second;

    prev = first;
  }

  return dummy.next;
}
