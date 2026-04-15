/**
 * Returns true if the given string is a valid Ethereum wallet address.
 * A valid address starts with '0x' and is followed by exactly 40 hex characters.
 */
export function isValidWalletAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}
