// Question 1
const isUpperCase = (str) => {
  return str === str.toUpperCase()
};

// Question 2
const removeVowels = (str) => {
return str.map((str) => str.replace(/[aeiou]/gi, ""));
};
// console.log(removeVowels(["AEIOU"]))

// Question 3
const wordCap = (str) => {
  let splitStr = str.split(' ')
  for(let i = 0; i < splitStr.length; i++){
    let upper = splitStr[i][0].toUpperCase()
    // console.log(upper)
    let stringBody = splitStr[i].substring(1).toLowerCase()
    // console.log(stringBody)
    splitStr[i] = upper + stringBody
  }
  return splitStr.join(" ")
};
// Question 4
const swapCase = (str) => {
  let swappedStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      swappedStr += str[i].toLowerCase();
    } else if (str[i] === str[i].toLowerCase()) {
      swappedStr += str[i].toUpperCase();
    } else {
      swappedStr += str[i];
    }
  }
  return swappedStr;
};

// Question 5
const staggeredCase = (stage) => {
  let string = "";
  let letter = "A";
  for (let i = 0; i < stage.length; i++) {
    if (/[a-z]/gi.test(stage[i])) {
      if (letter === "A") {
        string += stage[i].toUpperCase();
        letter = "Z";
      } else {
        string += stage[i].toLowerCase();
        letter = "A";
      }
    } else {
      string += stage[i];
    }
  }
  return string;
}

// Question 6
  const wordLengths = (str = '') => {
    if (str === "") return [];
    return str.split(" ").map((word) => word + " " + word.length);
  };

// Question 7
const searchWord = (word, text) => {
  const stripText = text.replaceAll(',', '')
  let array = stripText.split(' ')
  let countOfWords = 0
for (let i = 0; i < array.length; i++ ){
  if (array[i].toLowerCase() === word){
    countOfWords += 1
  }
}
return countOfWords
};


// The code below ensures that this file can talk to our test file.
module.exports = {
  isUpperCase,
  removeVowels,
  wordCap,
  swapCase,
  staggeredCase,
  wordLengths,
  searchWord,
};
