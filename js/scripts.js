// Business Logic
function plTrans(translate){
  
  if (translate === RegExp("/d")) {
    return translate
  }
  else if (translate.charAt(0) === "a" || translate.charAt(0) === "e" || translate.charAt(0) === "i" || translate.charAt(0) === "o" || translate.charAt(0) === "u") {
    return translate + "way";
  }
  else {
    return translate
  }
}










// UI Logic
$(document).ready(function(){
  $('form#pig-latin').submit(function(event) {
    event.preventDefault();
    
    const userInput = plTrans($("input#englishInput").val());
    console.log(userInput);

    $('#result').text(userInput);
  });
});



///



