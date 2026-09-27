function flattenRecursive(arr) {
  const result = [];

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
