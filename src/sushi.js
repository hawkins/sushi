const assert = require("assert");
const ALL_INGREDIENTS = require("./ingredients");

class Roll {
  constructor(ingredients) {
    assert(Array.isArray(ingredients));
    assert.ok(
      !ingredients.some(i => ALL_INGREDIENTS.indexOf(i) === -1),
      "Sushi Roll ingredients must be a subset of ALL_INGREDIENTS"
    );
    this.ingredients = ingredients;
  }

  getDescriptor() {
    const desc = {};
    ALL_INGREDIENTS.map(i => (desc[i] = 0));
    this.ingredients.map(i => (desc[i] = 1));
    return desc;
  }
}

const createRollFromDescriptor = descriptor => {
  return new Roll(Object.keys(descriptor).filter(key => descriptor[key] > 0));
};

module.exports = {
  Roll,
  createRollFromDescriptor
};
