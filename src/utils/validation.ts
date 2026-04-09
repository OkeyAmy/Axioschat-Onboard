export function isValidEmail(email: string): boolean {
  // A simple regex for email validation.
  // This regex is a common starting point and covers most standard email formats.
  // It checks for:
  // - one or more characters before '@' (local part)
  // - an '@' symbol
  // - one or more characters for the domain name
  // - a '.'
  // - one or more characters for the top-level domain
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/*
// Usage example:
console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("user.name+tag@sub.domain.co.uk")); // true
console.log(isValidEmail("invalid-email")); // false
console.log(isValidEmail("@example.com")); // false
console.log(isValidEmail("user@.com")); // false
console.log(isValidEmail("user@example")); // false
*/
