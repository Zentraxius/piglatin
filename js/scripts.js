// Business Logic
function pigLatin(str){
  const vowels = ["a", "e", "i", "o", "u"];
  

  if (str === RegExp("/d")) {
    return str;
  }
  else if (vowels.includes(str[0])) {
    return str + "way";
  } else {
    let vowelIndex = 0
    for (i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        vowelIndex = i;
        break;
      }
      }
    
    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    // string || ing + str + ay = ingstray
    }
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



