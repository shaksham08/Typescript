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

- This wont give any error
