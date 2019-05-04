'use strict'

var fibo = function(n) {
    var n1 = 0; 
    var n2 = 1; 
    var ans = 0;
    var array1 = [];
     array1.push(n1,n2)
     for(var i=1;i<n;i++){
    ans=n1+n2;
    n1=n2;
    n2=ans;
    array1.push(ans);
  }
  return array1;
}
fibo(8);