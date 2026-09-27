export class Queue<T> {
  private queue: T[];
  private front: number; // index of the front element
  private length: number; // number of elements currently in the queue
  private readonly maxSize: number; // maximum number of elements queue can contain

  public constructor(maxSize: number) {
    // Make sure maxSize is at least 1
    this.maxSize = maxSize > 0 ? maxSize : 10;
    this.length = 0;
    this.front = 0;
    this.queue = new Array<T>(this.maxSize);
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public isFull(): boolean {
    return this.length === this.maxSize;
  }

  public enqueue(newItem: T): void {
    if (this.isFull()) {
      throw new Error("Queue is full");
    }

    const rear = (this.front + this.length) % this.maxSize;
    this.queue[rear] = newItem;
    this.length++;
  }

  public dequeue(): T {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    const item = this.queue[this.front];
    this.front = (this.front + 1) % this.maxSize;
    this.length--;
    return item;
  }

  public peek(): T {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    return this.queue[this.front];
  }

  public queueContents(): void {
    console.log("Queue Contents");
    for (let i = 0; i < this.length; ++i) {
      const index = (this.front + i) % this.maxSize;
      console.log(`queue[${i}]: ${this.queue[index]}`);
    }
  }
}
