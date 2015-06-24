function scoreThrows(radiuses){
  var result = radiuses.map(function(value){
    return value>10 ? 0 : value>=5 && value<=10 ? 5 : 10;
  }).reduce(function(previousValue, currentValue){
    return previousValue + currentValue;
  },0);
  
  return radiuses.length>0 && radiuses.length*10===result ? result+100 : result;
}
