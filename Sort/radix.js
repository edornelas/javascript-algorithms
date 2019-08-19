function getDigit(number,i){
    return Math.floor(Math.abs(number) / Math.pow(10, i)) % 10;
}

function digitCount(number){
    if(number === 0) return 1;
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function mostDigits(arrNums){
    let maxDigits = 0;
    arrNums.forEach(element => {
      maxDigits = Math.max(maxDigits,digitCountMath(element));    
    });
   

    return maxDigits;

}

function radixSort(numbersList){
    let maxDigits = mostDigits(numbersList);   //O(n)

    let k = 0;
    while (k < maxDigits){  //O(k)
        let bucket = Array.from({length: 10}, () => []);

     /*   for(let i = 0; i < 10; i++){
             bucket[i] = [];
        } */

          
        numbersList.forEach(element => { //O(n)
            bucket[getDigit(element,k)].push(element);
        });

        //console.log(bucket);
        
        k++;

        numbersList = [];
        /*bucket.forEach(element => {
            element.forEach(el => {
                numbersList.push(el);
            });
        });*/

        numbersList = [].concat(...bucket); // O(n)

        console.log(numbersList);
    }

    return numbersList;
}