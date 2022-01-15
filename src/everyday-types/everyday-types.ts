type Point = {
  x: number;
  y: number;
};

// types are *aliases* and can be unions too
type ID = number | string;

class EverydayTypes {

  //Types can be explicitly declared or inferred
  myName: string = "Test"
  myOtherName = "Test"

  greet(name: string) {
    console.log(`Aloha ${name} :)`);
  }

  // Return types can be annotated too
  getFavoriteNumber(): number {
    return 42;
  }

  // Object definition can be inlined with semicolons
  addCoords(pt: {x: number; y: number}) {
    return pt.x + pt.y;
  }

  // Optional parameter syntax uses a question mark in the declaration
  getFullName(obj: { first: string; last?: string }) {
    return `${obj.first ?? ""} ${obj.last ?? ""}`.trim();
  }

  // Union Types
  formatId(id: number | string) {
    return `ID: ${id}`;
  }

  // Demonstrates narrowing based on type
  welcomePeople(input: string[] | string) {
    if(Array.isArray(input)) {
      return "Hello, " + input.join(" and ");
    }
    else {
      return "Welcome lone traveler " + input;
    }
  }

  // Don't need to narrow b/c strings and arrays both have slice
  getFirstThree(x: number[] | string) {
    return x.slice(0, 3);
  }

  // Literal types can act as enums
  // Also works for numbers
  printText(s: string, alignment: "left" | "right" | "center") {

  }

  // However, this doesn't work during type checking since object types can change.
  // Need to reassure TS that the object type won't change by casting to const
  //
  // Error:
  // const req = { url: "https://example.com", method: "GET" };
  // handleRequest(req.url, req.method);
  //
  // Works:
  // const req = { url: "blah", method: "GET" } as const;

  // Null assertations can force TypeScript to ignore a possible null
  // Note that this only applies if strictNullChecks are on
  liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
  }
}

export default EverydayTypes;
