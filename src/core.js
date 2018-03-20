const assert = require("assert");
const brain = require("brain.js");
const { Roll } = require("./sushi");

//create a simple feed forward neural network with backpropagation
let net = new brain.NeuralNetwork();

const train = (rolls, results) => {
  assert(Array.isArray(rolls));
  assert(Array.isArray(results));
  assert(rolls[0] instanceof Roll);
  assert(rolls.length == results.length);

  const trainingData = rolls.map((roll, index) => {
    return {
      input: roll.getDescriptor(),
      output: { tastyProbability: results[index] }
    };
  });

  console.log(trainingData.map(a => a.input));

  net.train(trainingData);
};

const run = roll => {
  assert(roll instanceof Roll);

  return net.run(roll.getDescriptor());
};

const reset = () => {
  net = new brain.NeuralNetwork();
};

module.exports = {
  train,
  run,
  reset
};
