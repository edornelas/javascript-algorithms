function selectionSort(arr){

    const swap = (arr, idx1, idx2) =>{
        [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
    };
    let index = 0;

    while(index < arr.length){
        let minIndex = 0+index;
    
        for(let j = 1+index; j < arr.length; j++){
               if(arr[minIndex] > arr[j]){
                   minIndex = j;
               }
        }

        if(minIndex !== index){
             console.log("*************");
             console.log(arr);
             swap(arr,index, minIndex);
             console.log("SWAPPING TO:");
             console.log(arr);
             console.log("*************");
        }

        index++;

    }


    return arr;
}