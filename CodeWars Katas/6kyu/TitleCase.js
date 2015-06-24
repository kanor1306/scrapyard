function titleCase(title, minorWords) {

  function capitalize(value) {
    return value.charAt(0).toUpperCase()+value.slice(1).toLowerCase();
  }

  return title ? title.split(" ").reduce(function(previousValue, currentValue, index){
      var regExp = new RegExp("(^|\\s)"+currentValue+"(?=\\s|$)","gi");
      
      return (previousValue + " " + 
      ((!index || !minorWords || !minorWords.match(regExp))
      ? capitalize(currentValue) 
      : currentValue.toLowerCase())).trim()
      },"") : "";
}
