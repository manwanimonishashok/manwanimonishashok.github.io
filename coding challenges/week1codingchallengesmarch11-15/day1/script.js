check=function func1(x) {
  if(x%2 == 0) {
    console.log("Please Enter a odd Number"); 
  } else {
    func2();  
  }
}
function func2() {
  for(i=1;i<=100;i=i+2){
     square = i * i;
     console.log(square);
  }
}
check(2);
check(1);