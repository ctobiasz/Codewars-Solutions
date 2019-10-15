//This is just a overview for me so I remember the methods and concept

//const b = Array(5); This create an Array with 5 values of undefined.
//Array(5) === [ undefined, undefined, undefined, undefined, undefined ]

//b.fill("+".repeat(5)) === Fill() replaces all the undefined values with the string "+" and repeat() takes the entire 5 strings
//                          and considers all 5 values like 1 string and it repeats the entire string 5 times.
//Array(5) [ "+++++", "+++++", "+++++", "+++++", "+++++" ]


//b.join("\n") === Lastly, join will take the 5 new strings of pluses within the array and concat them into one new string with
//                 the rule to ('\n') which means to skip a line after every string.
//"+++++
// +++++
// +++++
// +++++
// +++++";


//solution
const generateShape = (n) => Array(n).fill("+".repeat(n)).join('\n');
