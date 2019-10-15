//solution
function stairsIn20(stairs) {
   var sum = 0;
     for (let i = 0; i < stairs.length; i++) {
       let element = stairs[i];
     for(let j=0; j<element.length; j++) {
       sum += element[j]
     }
     }
     return sum*20
}


//cleaner solution
//function stairsIn20(stairs) {
//       return stairs.reduce((steps, day) => steps.concat(day)).reduce((sum, count) => sum + count) * 20;
//}
