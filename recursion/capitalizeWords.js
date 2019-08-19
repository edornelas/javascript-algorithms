function capitalizeWords (arrWords) {
    // add whatever parameters you deem necessary - good luck!
    let upperWords = [];
  
    if(arrWords.length === 0)
      return [];
  
      let word = arrWords[0];
      upperWords.push(word.toUpperCase());
      
    return upperWords.concat(capitalizeWords (arrWords.slice(1)));
  }
  
  // let words = ['i', 'am', 'learning', 'recursion'];
  // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']