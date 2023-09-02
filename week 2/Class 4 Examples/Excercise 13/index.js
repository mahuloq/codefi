function wordReverse(sentance) {
  const words = sentance.split(" ");
  const reverseWords = words.map((i) => i.split("").reverse().join(""));
  const reverseSentance = reverseWords.join(" ");
  return reverseSentance;
}
const reverseSentance = wordReverse("Hello hows it going");
console.log(reverseSentance);
