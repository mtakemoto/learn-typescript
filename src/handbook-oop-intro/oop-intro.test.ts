import { Car, Empty, Golfer, StructuralTypes } from "./oop-intro";

/*
Since TypeScript builds on JavaScript, types are all built on existing js objects.
So, the system cares less about the definition and more about what's inside.
*/

describe("Erased structural types", () => {
  const obj = {
    x: 1,
    y: 2,
    name: "Origin"
  }

  let st = new StructuralTypes();

  test('object can act as pointlike', () => {
    expect(st.addPoints(obj)).toBe(3);
  });

  test('object can act as named', () => {
    expect(st.getName(obj)).toBe("Origin");
  });

  test('reflection types not available', () => {
    let carType = typeof(new Car());
    expect(carType).toBe("object");
    expect(carType).not.toBe("Car");
  })
});

describe('Empty Types', () => {
  function fn(arg: Empty) {
    console.log(arg);
  }

  // Valid typescript - k has all the properties of empty
  fn({k: 10});
});

// Both have identical "drive" methods so TS is k with it
describe('Identical Types', () => {
  let obj: Car = new Golfer();

  test('Should be a golf cart', () => {
    expect(obj.drive()).toContain("Golf");
  });
});



