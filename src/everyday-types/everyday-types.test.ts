import EverydayTypes from "./everyday-types";

test('should provide type data for anonymous functions', () => {
  const names = ["Natasha", "Clint", "Tony", "Bruce"];

  // Observe the syntax error when TS detects that we misspelled a string method on the anonymous type.
  // TS is inferring the type here based on the array.
  // names.forEach(s => console.log(s.toUppercase()));

  expect(names.length).toBe(4);
});

describe('Objects', () => {
  let et = new EverydayTypes();
  let point = {x: 1161, y: -420};
  let person = {first: "Some", last: "Person"};
  let person2 = {first: "Some"};

  test('should add coordinates', () => {
    expect(et.addCoords(point)).toBe(741);
  });

  test('should print full name', () => {
    expect(et.getFullName(person)).toBe("Some Person");
  });

  test('should be ok with one argument', () => {
    expect(et.getFullName(person2)).toBe("Some");
  });
});

describe('Unions', () => {
  let et = new EverydayTypes();

  test('should accept a number or string', () => {
    expect(et.formatId(10)).toBe("ID: 10");
    expect(et.formatId("42")).toBe("ID: 42");

    // Syntax error: not assignable
    // printId({ myId: 65535 });
  });

  test('should print if string array', () => {
    let actual = et.welcomePeople(["Finn", "Jake"]);
    expect(actual).toBe("Hello, Finn and Jake");
  });

  test('should print if a single string', () => {
    let actual = et.welcomePeople("Finn");
    expect(actual).toBe("Welcome lone traveler Finn");
  });

  test('should work with number arrays and strings', () => {
    let actual = et.getFirstThree([0, 1, 2, 3]);
    let actual2 = et.getFirstThree("banana");

    expect(actual).toEqual([0, 1, 2]);
    expect(actual2).toEqual("ban");
  });
});


