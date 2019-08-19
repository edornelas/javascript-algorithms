function merge(firstArr,secondArr){

    let newArr = [];
    
    let i = 0;
    let j = 0;
    
    while(i < firstArr.length || j < secondArr.length){
    
      if(i >= firstArr.length){
          newArr.push(secondArr[j]);
          j++;
      }else if(j >= secondArr.length){
        newArr.push(firstArr[i]);
        i++;
      }else{
          if(firstArr[i] < secondArr[j]){
            newArr.push(firstArr[i]);
            i++;
          }else{
            newArr.push(secondArr[j]);
            j++;
          } 
      }   
    }
    
    
    
    return newArr;
    }
    
    //console.log(merge([2,14,99,100],[1,20,80]));
    //console.log(merge([1,20,80],[2,14,99,100]));
    
    function mergeSort(arr){
      if(arr.length <= 1)
        return arr;
      else{
         let half = Math.floor(arr.length/2);
    
         return merge(mergeSort(arr.slice(0,half)),mergeSort(arr.slice(half)));
    
       }
    
    }