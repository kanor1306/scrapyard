// Description:

// Batman & Robin have gotten into quite a pickle this time. The Joker has mixed
// up their iconic quotes and also replaced one of the characters in their
// names, with a number. They need help getting things back in order.

// Implement the getQuote method which takes in an array of quotes, and a string
// comprised of letters and a single number (e.g. "Rob1n") where the number
// corresponds to their quote indexed in the passed in array.

// Return the quote along with the character who said it:

// getQuote(["I am vengeance. I am the night. I am Batman!", "Holy haberdashery,
// Batman!", "Let's put a smile on that faaaceee!"], "Rob1n")    =>  "Robin:
// Holy haberdashery, Batman! Hint: You are guaranteed that the number in the
// passed in string is placed somewhere after the first 3 characters of the
// string. The quotes either belong to Batman, Robin, or Joker.

var getQuote = function(quotes, hero){
  var realHero;
  switch(hero.substring(0,3)){
    case 'Rob': realHero="Robin"; break;
    case 'Bat' : realHero = "Batman";break;
    case 'Jok' : realHero = "Joker";break;
  }

  for(var l in hero){
    if(!isNaN(hero[l])){  
    return realHero +": "+quotes[parseInt(hero[l])];
    }
  }
}
