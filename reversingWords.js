//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//Examples:
//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"

//process: str.split => split all the letters into one array..reverse() => reverse all the letters. 
//         join("") will form them into one string again.split(" ") => will split every entire word into one array.
//         reverse() => this will reverse the words in the array and join(" ") will join all the words into one string again.        


const reverseWords = str => str.split("").reverse().join("").split(" ").reverse().join(" ");
