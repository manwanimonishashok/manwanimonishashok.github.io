var isPrime = function (n) {
  if(n<=1){return false;}
  counter = 2
  while(counter < n) {
      if (n % counter == 0) {return false;}
      else {counter = counter + 1}
  }
  return true;
}

var generatePrime = function(size) {
  let primes = [];
  let count = 1;

  while (primes.length != size) {
    if (isPrime(count)) {
      primes.push(count);
    }
    //console.log("Is",counter)
    count++;
    //console.log("revised",counter)
  }
  return primes;
  
}

console.log(isPrime(2));
console.log(generatePrime(10));
            
          
       
             


     