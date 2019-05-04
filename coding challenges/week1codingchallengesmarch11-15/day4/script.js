var array1 = [1, 2, 4, 6];
var array2 = [1, 2, 4, 8];

var arrayCompare=function (array1,array2)
{
  if (array1.length ==  array2.length) {
    for (i = 0; i < array1.length; i++) {
        if(array1[i] != array2[i]){
          return false;
        }
    }
   return true;
  }
  else {
 
    return false;
  }

}
arrayCompare(array1,array2);



