//An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
//Note: anagrams are case insensitive
//Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
//Examples

// List "foefet"    is an anagram of "toffee"
// List"Buckethead" is an anagram of "DeathCubeK"


//first solution

const isAnagram = (scrambled, normal) => {
  const test = scrambled.toLowerCase().split('');
  const original = normal.toLowerCase().split('');
  const vv = test.sort().join('');
  const zz = original.sort().join('');
  
     if (vv === zz){
      return true;
     } else {
      return false;
     }
};

//cleaner solution

const isAnagram = (s, n) => s.toLowerCase().split('').sort().join('') === n.toLowerCase().split('').sort().join('') ? true : false;

