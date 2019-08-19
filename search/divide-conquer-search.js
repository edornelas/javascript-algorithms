/*
* Given a sorted array of integers, write a function
* called search, that accepts a value and returns the 
* index where the value passed to the function is located.
* If the value is not found, return -1
*/
function search(intArray,value){
    let ini = 0;
    let end = intArray.length;

    while(end -ini > 0){
        let middle = Math.floor((end-ini)/2) + ini;

        if(value > intArray[middle]){
               ini = middle+1;
        }else if(value < intArray[middle]){
               end = middle -1;
        }else{
            return middle;
        }
    }

    return -1;
}

function search_SOL(array,val){

    let intentos = 0;
    let min = 0;
    let max = array.length -1;

    while(min <= max){
        let middle = Math.floor((min+max) /2);
        let currentElement = array[middle];

        if(array[middle] < val){
            min = middle +1;
        }
        else if(array[middle] > val){
            max = middle -1
        }
        else{
            return middle;
        }
    }

    return -1;
}

//search([1,2,3,5,6,8,9,12,15,16,29,31,34,36,39,40,41,42,43,45,46,47,48,49,50,52,53,54,56,59,60,61,63,64,69,78,79,80,100,105,110,123,132,135,138,140],46);