function pivot(arr){
    let piv = 0;

    let leftArr = 0;
    let rightArr = 0;
    

    for(let i = 0; i < arr.length; i++){
        if(i != piv){
            if(arr[i] < arr[piv])
                leftArr.push(arr[i] );
            else
                rightArr.push(arr[i] );
        }
    }

    //leftArr.push(arr[piv]);

    return leftArr.length;

}