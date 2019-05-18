var isPowerOfTwo = function func1(x){

  if(x>=1&&x%2 == 0){
    while(x % 2 == 0) {
    x=x/2;
    //console.log(x);
    }
    if(x == 1) {
      console.log("true");
    }
    else {
       console.log("false");
    }
  }


 else{
  console.log("please enter a nonzero positive even number")
 }  
  
}

isPowerOfTwo(9);

isPowerOfTwo(8);

isPowerOfTwo(12);

isPowerOfTwo(16);

isPowerOfTwo(899);

isPowerOfTwo(2);

isPowerOfTwo(1024);

isPowerOfTwo(0);