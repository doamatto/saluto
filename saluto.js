export function saluto() {
  // These are languages either I know,
  // I want to learn, currently am learning,
  // or used to be learning.
  const greetings = [
    "你好", // Chinese (Simplifed/Mandarin)
    "Hello", // English
    "Bonjour", // French
    "어이", // Korean
    "こんにちわ", // Japanese
    "Hej", // Swedish
  ];

  // Generate a random number using the length of the array
  let len = greetings.length;
  let i = Math.floor(Math.random() * len);

  // Return that greeting
  return greetings[i];
}