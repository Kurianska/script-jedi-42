// http://www.codewars.com/kata/santaclausable-interface

function isSantaClausable(obj) {
 return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(method => typeof(obj[method]) ==='function');
}

// http://www.codewars.com/kata/cylon-evolution

class Cylon {
  constructor(model) {
    this.model = model;
  }
  attack() {
    return "Destroy all humans!";
  }
}
class HumanSkin extends Cylon {
  constructor(model) {
    super(model);
  }
  infiltrate() {
    return "Infiltrate the colonies";
  }
}

// https://www.codewars.com/kata/588a00ad70720f2cd9000005/train/javascript

class Router {
  constructor() {
    this.routes = {};
  }

  bind(url, method, action) {
    if (!this.routes[url]) {
      this.routes[url] = {};
    }
    this.routes[url][method] = action;
  }
  runRequest(url, method) {
    if (this.routes[url] && this.routes[url][method]) {
      return this.routes[url][method].call();
    } else {
      return "Error 404: Not Found";
    }
  }
}

