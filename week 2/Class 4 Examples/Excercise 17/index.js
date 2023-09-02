let palindrome = (word1 = prompt("Enter Word")) => {
  word1 = word1.replace(/!:\s+/g, "").replaceAll(",", "");
  let word2 = word1.split("").reverse().join("");
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();
  if (word1 === word2) {
    console.log("The two words are a palindrome.");
  } else {
    console.log("The two words are not a palindrome.");
  }
};

palindrome();
