function calculateHypotenuse(a,b){

    if(isNaN(parseInt(a)) || isNaN(parseInt(b)) || a<1 || b<1){
      throw "Bad Input";
    }
    return  Math.sqrt(Math.pow(a,2)+Math.pow(b,2)).toFixed(3)

}
