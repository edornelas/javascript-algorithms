// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!
  
    function reverse(str){
      //console.log("STR: "+str);
      if(str === ''){        
          return '';
      }
  
      return  str.charAt(str.length-1)+reverse(str.substr(0,str.length-1));
      }
  
      return str === reverse(str) ? true : false;
  
  }