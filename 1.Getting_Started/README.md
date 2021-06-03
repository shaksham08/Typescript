# Getting Started With Typescript

This is the first section of Typescript.

The current Latst version of typescript is **_4.3_**

## What is Typescript and Why we use it?

- Typescript is a javascript **Superset**
- A language build upon the Js
- It cant be executed by Js ie browsers/nodejs
- This adds new tools and features to the Js language
- The typescript is compiled to JS only
- This adds new features over js but which are at the end converted to Js only.

  ### Consider this Example written in Js

  ```js
  function add(num1, num2) {
    return num1 + num2;
  }
  add("1", "2");
  ```

  Here this will give the ouput as `"12"` as a string. But This is an unwanted behaviour.This is not a technical error but an logical error. So in big applications its tough to catch these errors.

  But with Typescript its easy to catch these errors in runtime and development itself.

## 1.FirstProject

```js
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
  return num1 + num2;
}
button.addEventListener("click", function () {
  console.log(add(input1.value, input2.value));
});
```

Here if we open the `index.html` file inside the `1.FirstProject` Folder then if we enter two numbers to add as 5 and 2. Then the result in the console would be 52. WHich is not correct answer.

SO this happens because all the input in a form are always stored as a string only if we try to access it from js.

- This is a weakness of Js, this is where typescript will help us.
- We could also add a top check in js code usig if else but this is some extra code for just checking some error.
- So we should check for errors on first place itself

  ### Download and install Typescript

  - Make sure you have installed `nodejs` already before procedding.
  - Run this `npm install -g typescript` to install typescript globally in our system.
  - We can make use of `tsc` command to compile the typescript files to js files.

- Now lets create a typescript file `using-ts.js`.

```ts
const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement; //this tells that it will never be null
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
```

- Once we compile this typescript file we would get a js file compiled out of it which would be error free because we checked for all error in the first place itself.

- The output js file we get from this will contain

```js
var button = document.querySelector("button");
var input1 = document.getElementById("num1"); //this tells that it will never be null
var input2 = document.getElementById("num2");
function add(num1, num2) {
  return num1 + num2;
}
button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
```

- The biggest advantage of typescript is that it gives some extra types.

- So typescript **forces** us to check for **errors** in first place itself.
