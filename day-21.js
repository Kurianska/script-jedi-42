// http://www.codewars.com/kata/573d11c48b97c0ad970002d4

const regex=/(http|https):\/\/[a-z\d.]+\.(net|com)/gi;

// http://www.codewars.com/kata/573e6831e3201f6a9b000971

const regex=/\b(\w)(\w)?(\w)?\w?\3\2\1\b/g;

// http://www.codewars.com/kata/573fb9223f9793e485000453

const regex = /(\d)(?=(\d{3})+$)/g;
function addCommas(money, reg) {
  return money.replace(reg, (x) => x + ',');
}
