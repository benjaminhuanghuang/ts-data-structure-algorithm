function flattenArray(value) {
  // Write your code here
  const result = [];
  // Use a stack to process elements
  const stack = [...value];

  while (stack.length > 0) {
    const current = stack.shift();

    if (Array.isArray(current)) {
      // Add elements to stack in reverse order to maintain original order
      for (let i = current.length - 1; i >= 0; i--) {
        stack.unshift(current[i]);
      }
    } else {
      // If not an array, add to result
      result.push(current);
    }
  }

  return result;
}
