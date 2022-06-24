// write a function that takes a string and
//a numberm and repeats the string
// n times with a space in the middle each time.
function stringRepeaterWithSpace(string, n) {
  if (!string) {
    return "";
  }
  // let resultStr = (string + " ").repeat(n);
  // resultStr = resultStr.slice(0, resultStr.length - 1);
  // return resultStr;
  return new Array(n).fill(string).join(" ");
}

function capitalizeFirst(string) {
  if (!string) {
    return "";
  }
  return string[0].toUpperCase() + string.slice(1);
}

module.exports = { stringRepeaterWithSpace, capitalizeFirst };
