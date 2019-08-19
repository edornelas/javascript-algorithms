function binarySearch(sortedArray,value){

    if(sortedArray.length === 1)
        return sortedArray[0] === value;
    
        let middle = Math.floor(sortedArray.length / 2);
        if(sortedArray[middle] === value)
            return true;
        else if(sortedArray[middle] > value){
    
            return binarySearch(sortedArray.slice(0,middle-1),value);
        }else{
             return binarySearch(sortedArray.slice(middle+1),value);
        }
    }