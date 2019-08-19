function capitalizeFirst(arr){
    // add whatever parameters you deem necessary - good luck!
    //console.log(typeof(arr));
  
  console.log(arr);
    var newArr = [];
  
    if(arr.length === 0)
    return [];
  
    let word = arr[0];
    word = word.charAt(0).toUpperCase() + word.slice(1);
    newArr.push(word);
    console.log(newArr);
    return newArr.concat(capitalizeFirst(arr.slice(1)));
  
  }