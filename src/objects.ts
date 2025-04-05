let student; // this below declaration with default any type and it is same as let student:any; and we can add as many property as there is no restriction

student = {
  name: "james",
  age: 32,
};

// defining the each property datatype for the object
let person: {
  name: string;
  age: number;
  isAlive: boolean;
};

person = {
  name: "padmanabha",
  age: 25,
  isAlive: true,
};
console.log(person);

//
