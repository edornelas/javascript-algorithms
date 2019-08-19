function findShorterString(Str,needle){
    let count = 0;
 
    for(let i = 0; i < Str.length; i++){
       
        for(let x = 0; x < needle.length; x++){
            if(Str[i+x] !== needle[x]){
             break;
            }
            if(x === needle.length-1)
             count++;
        }
    }
    return count; 
 }