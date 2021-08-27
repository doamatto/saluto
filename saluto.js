export function saluto() {
  const greetings = [
    "Hello", // English
    "Bonjour", // French
    "こんにちわ", // Japanese
    "Hej", // Swedish
  ];

  let len = greetings.length;
  let i = Math.floor(Math.random() * len);
  return greetings[i];
}