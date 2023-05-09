// stringLength

const stringLength = (string) => {
  if (string.length == 0) {
    new Error("atleast 1 ");
  }

  if (string.length > 10) {
    new Error("max 10");
  }

  return string.length;
};

// reverseString

const reverseString = (string) => {
 return string.split('').reverse().join('') ;
};

// calculator

class calculator{

add(a,b){
  return a + b ;
}

subtract(a ,b){
  return a - b ;
}

divide(a,b){
  return a / b ; 
}

multiply(a,b){
  return a *b
}
}

// capitalizeString

const capitalizeString = (string)=>{
let firstChar = string.charAt(0);
firstChar = firstChar.toUpperCase();
const newString = string.substring(1);
const reverseStr = `${firstChar}${newString}`
return reverseStr ;
}

module.exports = { stringLength , reverseString , calculator , capitalizeString};

