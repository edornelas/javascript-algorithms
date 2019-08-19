function pivot(arr, start=0, end=arr.length+1){

    var pivot = arr[start];
    var swapIdx = start;
    const swap = (arr, idx1,idx2) => {
      return  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
    };

    for(let i = start+1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i);
        }
    }
    swap(arr,start,swapIdx);
    //console.log(arr);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length-1){
    if(left < right){
        
        let pivotIdx = pivot(arr,left,right);

        quickSort(arr,left,pivotIdx-1);
        quickSort(arr,pivotIdx+1,right);
    }
    return arr;
}