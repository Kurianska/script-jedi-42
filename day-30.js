// http://www.codewars.com/kata/santaclausable-interface

function isSantaClausable(obj) {
 return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(method => typeof(obj[method]) ==='function');
}

// 

