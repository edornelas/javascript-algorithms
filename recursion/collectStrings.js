const obj = {
    stuff: "foo",
    data:{
        val:{
            thing:{
                info: "bar",
                moreInfo:{
                    evenMoreInfo:{
                        weMadeIt:"baz"
                    }
                }
            }
        }
    }
}
function collectStrings(myObject){
    //let keyNames = Object.keys(myObject);
    let stringsArray = [];
    //console.log(keyNames);

    for(let key in myObject){
        console.log(key);
        console.log(myObject[key]);
       if(typeof(myObject[key]) === 'string'){
            stringsArray.push(myObject[key]);
       }else{
           return stringsArray.concat(collectStrings(myObject[key]));
       }
    }

    return stringsArray;
}