function countSameString(longStr, shortStr) {
    let longStrIndex = 0;
    let shortStrIndex = 0;
    let count = 0;
   
   while (longStrIndex < longStr.length) {
      if (longStr[longStrIndex] === shortStr[shortStrIndex]) {
        if (shortStrIndex === shortStr.length - 1) {
          count += 1;
          shortStrIndex = 0;
          longStrIndex++;
        } else {
          shortStrIndex++;
        }
      } else {
        longStrIndex++;
      }
    }
   
    return count;
  }
  
    //countSameString("lorem ipsum dolor, ipse, lorem ipsum dolor, ipse", "ip");