function insertionSort(arr){
    /* const swap = (arr, idx1, idx2) => {
         [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
     };*/
     let switchIns = false;
 
 
     for(let i = 1; i < arr.length; i++){
         let currValue = arr[i];
 
         let j;
 
         for(j = i-1; j >= 0 && arr[j] > currValue; j--){
             switchIns = true;
              arr[j + 1] = arr[j];
         }
         
 
         //console.log(arr);
         //console.log(j);
         if(switchIns){
           arr[j+1] = currValue;
           switchIns = false;
         }
     }
 
     //console.log(arr);
 
     return arr;
 }