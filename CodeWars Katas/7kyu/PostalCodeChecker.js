function zipvalidate(postcode){
  return postcode.match(/^[^\D|^0,5,7,8,9|\n][\d]{5}$/g) ? true : false;
}
