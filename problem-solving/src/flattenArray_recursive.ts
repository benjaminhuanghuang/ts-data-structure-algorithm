type NestedArray<T> = T | NestedArray<T>[];

function flattenRecursive<T>(arr: NestedArray<T>[]): T[] {
  const result: T[] = [];

  for (const element of arr) {
    // If element is an array, recursively flatten it
    if (Array.isArray(element)) {
      result.push(...flattenRecursive(element));
    } else {
      // If element is not an array, add it directly
      result.push(element);
    }
  }

  return result;
}

export {};
