'use strict';
var factorial = function(n){
var num= 1;
  if(n < 0){
    return 0
  }
  if(n == 0){
    return 1
  }
  for(var i =1;i<=n;i++){
      num = num*i
  }
  return num
}
console.log(factorial(8))