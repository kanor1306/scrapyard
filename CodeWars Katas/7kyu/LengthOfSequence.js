var lengthOfSequence = function (arr, n) {
   var numOcurrences=0;
   var result = 0;
   
   for(var ocurrence = arr.indexOf(n);ocurrence!=-1;ocurrence = arr.indexOf(n)){    
     result = ocurrence-result;
     arr.splice(ocurrence, 1);
     numOcurrences++;
   }
   
   return numOcurrences===2 ? result+2 : 0;  
};
