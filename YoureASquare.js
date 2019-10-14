const isSquare = n => {
   var squared = Math.sqrt(n);
   return squared === Math.floor(squared) ? true : false;
}
