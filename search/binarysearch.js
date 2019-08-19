function binarySearch(sortedArray,value){
    let ini = 0;
    let end = sortedArray.length-1;
    let middle = 0;

    while(ini <= end){
        middle = Math.floor((end - ini)/2) + ini;
        if(sortedArray[middle] === value)
            return middle;
        else if(value > sortedArray[middle]){
           ini = middle+1;
        }else{
            end = middle -1;
        }
    }

    return -1;
}

//binarySearch([1,2,3,4,5],5);