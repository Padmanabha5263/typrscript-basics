/* type alias is an feature where if we have duplicate structure of an object with same structure with data type at the time we can utilise this feature

*/

type Person = {
  name: string;
  age: number;
};

let persons: Person[];
let students: Person;

persons = [
  { name: "Raj", age: 21 },
  { name: "james", age: 41 },
];

students = { name: "student1", age: 18 };

console.log("students", students);
console.log("person", persons);
