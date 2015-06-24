function abbreviate(string) {
  function replaceForAbbreviate(match){
       var length = match.length;
       return length>3 ? match[0]+(length-2)+match[length-1] : match;
  }

  return string.replace(/[\w]+|[\D+]/gi, replaceForAbbreviate)
}
