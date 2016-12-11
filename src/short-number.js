module.exports = shortNumber;

function shortNumber(number) {
  if (number >= 1000 && number < 1000000) {
    return shorten(number / 1000) + 'K';
  } else if (number >= 1000000) {
    return shorten(number / 1000000) + 'M';
  } else {
    return String(number);
  }
}

// returns number as a string, with at most one digit after decimal
function shorten(number) {
  var fixed = number.toFixed(1);

  if (fixed[-1] == '0') {
    return fixed.slice(0, -2);
  } else {
    return fixed;
  }
}
