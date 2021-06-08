// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//   const result = n1 + n2;
//   if (showResult) {
//     console.log(phrase + result);
//   } else {
//     return result;
//   }
// }

// const number1 = 5; // 5.0
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = "Result is: ";

// add(number1, number2, printResult, resultPhrase);

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   rule: [number, string]; // This marks a tuple type
// } = {
//   name: "Test",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   rule: [2, "Author"],
// };

// console.log(person.name);

// let favourateActivity: any[];
// favourateActivity = [2, "test"];

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

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
