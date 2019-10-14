// **side-note** toString(2) uses Base2 which represents binary being 0 and 1's** toString(10). There are 10 bases total. Calling toString(10) is actually converting the number into base2 and then back to base10.

//first solution
const addBinary = (a,b) => {
   var sum = a+b;
   return sum.toString(2);
}

//cleaner solution
const addBinary = (a,b) => (a+b).toString(2);


