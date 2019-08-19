function reverse(str){
    //console.log("STR: "+str);
    if(str === ''){        
        return '';
    }

    return  str.charAt(str.length-1)+reverse(str.substr(0,str.length-1));
}