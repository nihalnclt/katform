import crypto from "crypto";

export const generateUniqueId = (length: number) => {
  const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const randomString = Array.from(crypto.randomBytes(length))
    .map((byte) => characters[byte % characters.length])
    .join("");

  return randomString;
};
