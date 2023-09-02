let anagram = (
  word1 = prompt("Enter Word"),
  word2 = prompt("Enter Word 2")
) => {
  word1 = word1.replace(/\s+/g, "");
  word2 = word2.replace(/\s+/g, "");
  word1 = word1.toLowerCase().split("").sort().join("");
  word2 = word2.toLowerCase().split("").sort().join("");
  if (word1 === word2) {
    console.log("The two words are an anagram.");
  } else {
    console.log("The two words are not an anagram.");
  }
};

anagram();
