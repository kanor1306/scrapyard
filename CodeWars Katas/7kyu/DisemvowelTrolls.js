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
