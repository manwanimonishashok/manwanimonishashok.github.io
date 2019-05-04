// calculate difference in two string
var lengthsCompare = function(length1,length2){
  if(length1 > length2){
    return length1 - length2
  }
  if(length2 > length1){
    return length2 - length1
  }
}
// return the length of smaller string
var lengthOfSmallerString = function(string1,string2){
  if(string1.length < string2.length){
    return string1.length
  }
  else{
    return string2.length
  }
}



var Stringcomparison = function(string1,string2){
  var count = 0

    if(string1.length == string2.length){
      for(var i=0;i<=string1.length;i++){
        if(string1.charAt(i) != string2.charAt(i)){
            count = count +1
        }
      }
    }
  
    if(string1.length != string2.length){
      for(var i=0;i<lengthOfSmallerString(string1,string2);i++){
        if(string1.charAt(i) != string2.charAt(i)){
          count = count +1
        }
      }
      var length1 = string1.length
      var length2 = string2.length
      var diff = lengthsCompare(length1,length2)
      count = count + diff
    }

    return count
}

console.log(Stringcomparison("Program","Programming"))