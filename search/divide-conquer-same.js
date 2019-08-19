function same(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    let freqCounter1 = {};
    let freqCounter2 = {};

    for (let val of arr1){
        freqCounter1[val] = (freqCounter1[val] || 0) +1;
    }

    for (let val of arr2){
        freqCounter2[val] = (freqCounter2[val] || 0) +1;
    }

    console.log("freqCounter1: ",freqCounter1);
    console.log("freqCounter2: ",freqCounter2);

    for(let key in freqCounter1){
        if(!(key ** 2 in freqCounter2)){
            return false;
        }
        if(freqCounter2[key ** 2] !== freqCounter1[key]){
            return false;
        }
    }

    return true;
}


//console.log(same([1,2,5,3,2],[4,1,4,9,25]));
//console.log(same([1,2,3,4,5,6,7],[1,4,9,16,25,36,49]));
//console.log(same([1,2,5,3,2],[4,9,25,4,1]));