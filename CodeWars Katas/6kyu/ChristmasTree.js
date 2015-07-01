//Create a function christmasTree(height) that returns a christmas tree of the correct height
//
//christmasTree(5) should return:
//
//    *
//   ***
//  *****
// *******
//*********
//Height passed is always an integer between 0 and 100.
//
//Use \n for newlines between each line.
//
//    Pad with spaces so each line is the same length. The last line having only stars, no spaces.

function christmasTree(height) {
    var result="";
    var max= 2*parseInt(height)-1;
    var middlePos = Math.ceil(max/2)-1;

    var emptyStr = new Array(parseInt(max+1)).join(' ').split('');

    for(var i=0;i<height;i++){
        result+= emptyStr.map(function(item, index){
            return index<middlePos-i || index>middlePos+i ? " " : "*";
        }).join('');

        result = i===height-1 ? result : result+"\n";
    }

    return result;

}