function ipToInt32(ip){

  function num2bin(num){
    var pad = "00000000"
    var binString = Number(num).toString(2); 
    return pad.substring(binString.length,8) + binString;
  }

  return parseInt(ip.split('.').reduce(function(oldValue, currentValue, index, array){
        return oldValue+num2bin(currentValue); 
  }, ""),2)
}
