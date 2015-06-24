// Description:

// You've just recently been hired to calculate scores for a Dart Board game! 

// Scoring specifications:
// 0 points - radius above 10
// 5 points - radius between 5 and 10 inclusive
// 10 points - radius less than 5

// If all radiuses are less than 5, award 100 BONUS POINTS!

// Write a function that accepts an array of radiuses (can be integers and/or floats), 
// and returns a total score using the above specification.
// An empty array should return 0.

// Examples:
// scoreThrows( [1, 5, 11] ) => returns 15 
// scoreThrows( [15, 20, 30] ) => returns 0 
// scoreThrows( [1, 2, 3, 4] ) => returns 140

function scoreThrows(radiuses){
  var result = radiuses.map(function(value){
    return value>10 ? 0 : value>=5 && value<=10 ? 5 : 10;
  }).reduce(function(previousValue, currentValue){
    return previousValue + currentValue;
  },0);
  
  return radiuses.length>0 && radiuses.length*10===result ? result+100 : result;
}
