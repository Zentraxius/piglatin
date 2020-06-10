// Business Logic
function pigLatin(str){
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  // let newSentenceArray = str.split(" ");
  // let lastWord = newSentenceArray[newSentenceArray.length - 1];

  // if (lastWord[lastWord.length - 1] === ".") {
  //   newSentenceArray[newSentenceArray.length - 1] = lastWord.slice(0, lastWord.length - 2)
  //   lastWord = ".";
  // } else if (lastWord[lastWord.length - 1] === "!") {
  //   newSentenceArray[newSentenceArray.length - 1] = lastWord.slice(0, lastWord.length - 2)
  //   lastWord = "!";
  // } else if (lastWord[lastWord.length - 1] === "?") {
  //   newSentenceArray[newSentenceArray.length - 1] = lastWord.slice(0, lastWord.length - 2)
  //   lastWord = "?";
  // } else {
  //   lastWord = "";
  // }

  // newSentenceArray.forEach(function(word, index) {
  //     newSentenceArray[index] = word;
  // })
  if (/^[aeiou]/i.test(str)) { 
    return str + 'way';
  }
  else {
      return str.replace(/^(.[^aeiou]+)([aeiou].*)$/i, "$2$1ay");
  }
  // return newSentenceArray.join(" ") + lastWord;
  }


// UI Logic
$(document).ready(function(){
  $('form#pig-latin').submit(function(event) {
    event.preventDefault();
    
    const userInput = pigLatin($("input#englishInput").val());
    console.log(userInput);

    $('#result').text(userInput);
  });
});

