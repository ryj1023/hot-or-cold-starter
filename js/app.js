function randomNumber(){
	var random = Math.floor((Math.random() * 100) + 1);
     	console.log(random);
     	return random;
     };

    function newGame(){
      
    count = 0;
    pastGuesses = []
    userGuess = 0;
    random = randomNumber();
    $("#feedback").text("Make your Guess!");
    $('.numGuessed').html("").hide();
    $('#count').html("0");  
  }

$(document).ready(function(){

	
	 random = randomNumber();
	 pastGuesses = []
	 count = 0;
	 var guessList,
	 guessHtml,
	 userFeedback,
	 countElement;
	 userFeedback = $('#feedback');
	 guessList = $('#guessList');
	 countElement = $('#count');

	 
 	
$("a.new").click(function(){
 	
	    newGame();
 			});
			 
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});
     
  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	

		/* Generate random number*/
		

	/* Get user input*/
    var userGuess; 
    $('#userInput').submit(function (){
    	
    	
	    userGuess = $('#userGuess').val();
	    userGuess = parseInt(userGuess);
	    event.preventDefault();
	    $('#userGuess').val('');
	    $('#userGuess').focus();
	    console.log(feedback());

     	/* use random number and user guess to provide feedback */
	    
     function checkGuess(){
  		if(userGuess % 1 !== 0){
  		alert('please enter a number');
  		return true;
  }
  		if(userGuess < 0 || userGuess > 100){
  			alert("please pick a number between 0 and 100");
  			return true;
  		}

  return false;

}

      function feedback(){

      	  checkGuess();
      	  trackGuesses();
      	  
      	  if(userGuess == random){
  				alert("Congratulations! You Win! Lets play again!")
    			$("#feedback").text("You win!")
    			newGame();
    		
    		  		
    	 }else if(Math.abs(random - userGuess) < 10){ 	 	
    			
    			$("#feedback").text("Very Hot")
    		    count++;
  
    		    
    	}else if(Math.abs(random - userGuess) > 10 && Math.abs(random - userGuess) < 20){
    		
    			$("#feedback").text("Hot")
    		    count++;
    			
    	}else if(Math.abs(random - userGuess) > 20 && Math.abs(random - userGuess) < 30){
    		
    			$("#feedback").text("Barely Hot")
    		    count++;
    			
    	 }else {
    	 	
    			$("#feedback").text("Cold")
    	      count++;


    	    	
    	 };
          $("#count").text(count);
			
 	};


 	function trackGuesses(){

 		if(userGuess % 1 === 0){
 		 pastGuesses.push(userGuess);
 		}
 		 $.each(pastGuesses, function (){
 		 $('#guessList').append('<li class="numGuessed"><span>' + userGuess + '</span></li>')	
 			});
 		  pastGuesses = [];

 		
 	}


 	


 
	
 	
	});
});




