// Business Logic
function pigLatin(str){
  const vowels = ["a", "e", "i", "o", "u"];
  // This is great => ["is + th + ay = "isthay", "isway", "eatgray"]
  let newSentenceArray = str.split(" ");

  newSentenceArray.forEach(function(word, index) {
    if (word === RegExp("/d")) {
      newSentenceArray[index] = word;
    }

    else if (vowels.includes(word[0])) {
      newSentenceArray[index] = word + "way";

    } else if (word[0] === "q") {
      // queen => een + qu + ay = eenquay
      newSentenceArray[index] = word.slice(2) + word.slice(0, 2) + "ay";
    
    } else {
      let vowelIndex = 0
      for (i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
          vowelIndex = i;
          break;
        }
        }
      
      // string => ing + str + ay = ingstray
      newSentenceArray[index] = word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
      }
  })

  return newSentenceArray.join(" ");
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



///



