const assert = require("assert");
const ALL_INGREDIENTS = require("./ingredients");

class Roll {
  constructor(ingredients) {
    assert(Array.isArray(ingredients));
    this.ingredients = ingredients;
  }

  getDescriptor() {
    const desc = {};
    ALL_INGREDIENTS.map(i => (desc[i] = 0));
    this.ingredients.map(i => (desc[i] = 1));
    return desc;
  }
}

module.exports = {
  Roll
};
