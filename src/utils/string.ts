export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  if (maxLength <= 3) { // If maxLength is too small to even fit "..."
    return ".".repeat(maxLength); // Or throw error, or return empty string depending on desired behavior for edge case
  }
  return text.substring(0, maxLength - 3) + "...";
}

/*
// Usage example:
console.log(truncate("Hello world, this is a long string", 10)); // "Hello w..."
console.log(truncate("Short string", 20)); // "Short string"
console.log(truncate("Another very long string example", 5)); // "Anoth..."
console.log(truncate("abc", 3)); // "abc"
console.log(truncate("abcd", 3)); // "..."
console.log(truncate("a", 0)); // ""
console.log(truncate("a", 1)); // "a"
*/
