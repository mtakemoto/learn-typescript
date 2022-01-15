import { greet } from "./basics";

test('Date to return string', () => {
  expect(typeof(Date())).toBe("string");

  greet("Matt", new Date());
});

