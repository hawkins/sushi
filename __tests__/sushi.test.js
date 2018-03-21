const { Roll } = require("../src/sushi");

describe("Sushi Roll", () => {
  it("can be made from ingredients", () => {
    expect(() => {
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
      ]);
    }).not.toThrowError();
  });

  it("can't be made from random junk'", () => {
    expect(() => {
      new Roll([
        "tonka truck",
        "lego brick",
        "your neighbor's garage door opener",
        "frozen water",
        "caffeine pills",
        "bike tire"
      ]);
    }).toThrowErrorMatchingSnapshot();
  });

  it("can be described as a map of ingredients to their presence", () => {
    expect(
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
      ]).getDescriptor()
    ).toMatchSnapshot();
  });
});
