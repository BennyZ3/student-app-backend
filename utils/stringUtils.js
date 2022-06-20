// write a function that takes a string and
//a numberm and repeats the string
// n times with a space in the middle each time.
function stringRepeaterWithSpace(string, n) {
  return (string + " ").repeat(n);
}

function capitalizeFirst(string) {
  return string[0].toUpperCase() + string.slice(1);
}

module.exports = { stringRepeaterWithSpace, capitalizeFirst };
