// Business Logic
function pigLatin(str){
  const vowels = ["a", "e", "i", "o", "u"];

  if (str === RegExp("/d")) {
    return str;
  }
  else if (vowels.includes(str[0])) {
    return str + "way";
  }


  // if (translate === RegExp("/d")) {
  //   return translate
  // } else if (translate.charAt(0) === "a" || translate.charAt(0) === "e" || translate.charAt(0) === "i" || translate.charAt(0) === "o" || translate.charAt(0) === "u") {
  //   return translate + "way";
  // } else {
  //   const charArray = translate.split("");
  //   let newCharArray = [];
  //   for (i = 0; i < charArray.length; i++) {
  //     if (charArray[i] === "a" || charArray[i] === "e" || charArray[i] === "i" || charArray[i] === "o" || charArray[i] === "u") {
  //       break;
  //     } else {
  //       const char = charArray[]
  //     }
  //   }
  // }
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



