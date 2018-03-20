const { Roll } = require("./src/sushi");
const { train, run, reset } = require("./src/core");

const rolls = [
  new Roll([
    "white rice",
    "seaweed wrap",
    "fried shrimp",
    "avocado",
    "cream cheese",
    "shredded carrot",
    "green bean",
    "spicy mayo",
    "sweet chili"
  ]),
  new Roll([
    "white rice",
    "seaweed wrap",
    "fried shrimp",
    "avocado",
    "cream cheese",
    "shredded carrot",
    "green bean",
    "spicy mayo",
    "sweet soy"
  ]),
  new Roll([
    "white rice",
    "seaweed wrap",
    "fried shrimp",
    "crab",
    "apple",
    "shredded carrot",
    "green bean",
    "spicy mayo",
    "sweet soy"
  ]),
  new Roll([
    "brown rice",
    "tofu wrap",
    "crap",
    "apple",
    "shredded carrots",
    "sweet soy"
  ]),
  new Roll([
    "brown rice",
    "tofu wrap",
    "crap",
    "apple",
    "shredded carrots",
    "spicy mayo"
  ])
];

const results = [1, 1, 0, 1, 0];

train(rolls, results);

const output = run(
  new Roll([
    "white rice",
    "seaweed wrap",
    "fried shrimp",
    "shredded carrot",
    "raw salmon",
    "sweet soy"
  ])
);

console.log(output);
