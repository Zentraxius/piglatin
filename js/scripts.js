$(document).ready(function(){
  $('form#pig-latin').submit(function(event) {
    event.preventDefault();
    
    const userInput = $("input#englishInput").val();
    console.log(userInput);




    $('#result').text(userInput);
  });
});








