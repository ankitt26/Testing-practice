const stringLength = (string) => {
  if (string.length == 0) {
    new Error("atleast 1 ");
  }

  if (string.length > 10) {
    new Error("max 10");
  }

  return string.length;
};

const reverseString = (string) => {
 return string.split('').reverse().join('') ;
};

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


module.exports = { stringLength , reverseString , calculator};
