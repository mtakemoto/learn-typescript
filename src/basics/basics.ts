const message = "hello";

// This expression is not callable.  Type "string" has no call signatures
// Would be a runtime error in vanilla JS
// message();

const user = {
  name: "Person",
  favoriteNumber: 741
}

// Property "location" does not exist on type...
// Would be a runtime error in vanilla JS
// user.location;

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

export { greet };
