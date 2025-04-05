/* */

const printingVal = (value: any) => {
  console.log("value", value);
};
const add = (varOne: number, varTwo: number): number => {
  return varOne + varTwo;
};

const addOrStringConcatenation = (
  varOne: number | string,
  varTwo: number | string
): number | string => {
  if (typeof varOne === "number" && typeof varTwo === "number") {
    return varOne + varTwo;
  } else {
    return varOne.toString() + varTwo.toString();
  }
};

console.log("addition", add(30, 30));

console.log(
  "addition or string concatination",
  addOrStringConcatenation("stringOne", "stringTwo")
);

printingVal("hellow");
