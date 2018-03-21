const { Roll, createRollFromDescriptor } = require("../src/sushi");
const { run, train, reset } = require("../src/core");

const { rolls, results, newRoll } = require("./fixtures/good.json");

describe("Core", () => {
  it("can train a net", () => {
    expect(() => {
      train(rolls.map(createRollFromDescriptor), results);
    }).not.toThrowError();
  });

  it("can run on a trained net", () => {
    train(rolls.map(createRollFromDescriptor), results);
    expect(
      run(createRollFromDescriptor(newRoll)).tastyProbability
    ).toBeGreaterThan(0);
  });

  it("can reset a trained net", () => {
    expect(() => {
      train(rolls.map(createRollFromDescriptor), results);
      reset();
    }).not.toThrowError();
  });
});
