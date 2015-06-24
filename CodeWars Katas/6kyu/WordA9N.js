// Description:

// The word i18n is a common abbreviation of internationalization the developer
// community use instead of typing the whole word and trying to spell it
// correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all words within that
// string of length 4 or greater into an abbreviation following the same rules.

// Notes:

// A "word" is a sequence of alphabetical characters. By this definition, if
// there is a hyphen (eg. "elephant-ride"), this will produce two, one on either
// side (eg. "elephant" and "ride"). The abbreviated version of the word should
// have the first letter, then the number of removed characters, then the last
// letter (eg. "e6t-r2e").

function abbreviate(string) {
  function replaceForAbbreviate(match){
       var length = match.length;
       return length>3 ? match[0]+(length-2)+match[length-1] : match;
  }

  return string.replace(/[\w]+|[\D+]/gi, replaceForAbbreviate)
}
