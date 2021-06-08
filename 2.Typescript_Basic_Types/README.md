# Type Script Basic Types

## Core Types

1. **number** - `1,1.53,-10` - All numbers , no differentiation between integers and float

2. **string** - `"Hi"` - All text values

3. **boolean** - `true,false` - just these two, no "truthy" or "falsy" values

```ts
console.log("Time to get started...");

function add(n1, n2) {
  return n1 + n2;
}

const number1 = "4";
const number2 = 6.5;

const result = add(number1, number2);
console.log(result);
```

- Here we see that it will not work correctly as the op will be `46.5`

- This mistake can happen and also it can be hard to find so typescript help us

```ts
console.log("Time to get started...");

function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = "4";
const number2 = 6.5;

const result = add(number1, number2);
console.log(result);
```

Now this wil give error in compile time only so that we should add extra check to fix this in development only.

```ts
console.log("Time to get started...");

function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = "4";
const number2 = 6.5;

const result = add(+number1, +number2);
console.log(result);
```

- Now this wont give any error

```ts
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5; // 5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
```

4. **Object Type** - {age : 30} - any js object type

```ts
const person = {
  name: "Test",
  age: 30,
};

console.log(person.nickname);
```

- Here this will throw an error at compile time only that there is no property called nickname

- we could explicitly also assign it as object type

```ts
const person: object = {
  name: "Test",
  age: 30,
};

console.log(person.name);
```

- But this will also not be able to find name property as typescript dosent know that there is a name property.

- SO we need to be more specific

```ts
const person: {
  name: string;
  age: number;
} = {
  name: "Test",
  age: 30,
};

console.log(person.name);
```

- Now we dont see any error and it works fine now

- But this is not good practice, we should let typescript decide on its own.

```ts
const person = {
  name: "Test",
  age: 30,
};

console.log(person.name);
```

- we can even created nested objects

```json
{
  id: string;
  price: number;
  tags: string[],
  details: {
    title: string;
    description: string;
  }
}
```

5. **Arrays Type** - [1,2,3] - Any javascript Array , type can be flexible or string(regarding the element type)

```ts
const person = {
  name: "Test",
  age: 30,
  hobbies: ["sports", "cooking"],
};

console.log(person.name);
```

- Here the typescript knows that hobbies is an array of string `string[]`

- We can exlicitely set the type of data

```ts
let favourateActivity: string[];
favourateActivity = [2, "test"];
```

- Here this would give the error as we are storing a number in place of string.

- If we want to add any type then we can make use of `any` type

```ts
let favourateActivity: any[];
favourateActivity = [2, "test"];
```

- This wont give any error.

6. **Tuples** - [1,2] - Added By typescript, Fixed length and fixed type array

```ts
const person: {
  name: string;
  age: number;
  hobbies: string[];
  rule: [number, string]; // This marks a tuple type
} = {
  name: "Test",
  age: 30,
  hobbies: ["sports", "cooking"],
  rule: [2, "Author"],
};
```

- Here `rule: [number, string]` marks rule as a tupels type.

- This tells that there is only 2 items and 1st is number and 2nd is string always.

7. **Enum** - enum{NEW , OLD} - Automatically enumarated global constant identifiers.

```ts
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
```

8. **Union Types**

```ts
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Max", "Anna");
console.log(combinedNames);
```

- Here this function will work with both string and number input

9. **Literal Type**

- We use literal type only when we are sure about the value which will be stored.

```ts
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
```

# Type Aliases / Custom Types

```ts
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
```

- Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

```ts
type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 }; // this works!
```

- This allows you to avoid unnecessary repetition and manage types centrally.

- For example, you can simplify this code:

```ts
function greet(user: { name: string; age: number }) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
```

To:

```ts
type User = { name: string; age: number };

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
```
