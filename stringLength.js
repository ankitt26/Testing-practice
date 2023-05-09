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

module.exports = { stringLength , reverseString};
