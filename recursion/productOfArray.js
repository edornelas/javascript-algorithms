function productOfArray(intArray){

    if(intArray.length === 0){
        return 1;
    }
    
    return intArray[0]*productOfArray(intArray.slice(1));
}