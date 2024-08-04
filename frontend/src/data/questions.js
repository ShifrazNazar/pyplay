// src/data/questions.js
const questions = [
  {
    question: "What keyword is used to define a function in Python?",
    options: [
      { value: "A", label: "func" },
      { value: "B", label: "define" },
      { value: "C", label: "def" },
      { value: "D", label: "function" },
    ],
    correctAnswer: "C",
    hint: "This keyword is also used to create a new method."
  },
  {
    question: "Which data structure is used to store a collection of unique elements in Python?",
    options: [
      { value: "A", label: "List" },
      { value: "B", label: "Tuple" },
      { value: "C", label: "Set" },
      { value: "D", label: "Dictionary" },
    ],
    correctAnswer: "C",
    hint: "This data structure cannot contain duplicate values."
  },
  {
    question: "What is the output of `print(2 ** 3)` in Python?",
    options: [
      { value: "A", label: "5" },
      { value: "B", label: "6" },
      { value: "C", label: "8" },
      { value: "D", label: "9" },
    ],
    correctAnswer: "C",
    hint: "This operator calculates the power of a number."
  },
  {
    question: "Which of the following is a mutable data type in Python?",
    options: [
      { value: "A", label: "String" },
      { value: "B", label: "Tuple" },
      { value: "C", label: "List" },
      { value: "D", label: "Integer" },
    ],
    correctAnswer: "C",
    hint: "You can modify this data type after its creation."
  },
  {
    question: "What does `len('hello')` return in Python?",
    options: [
      { value: "A", label: "4" },
      { value: "B", label: "5" },
      { value: "C", label: "6" },
      { value: "D", label: "7" },
    ],
    correctAnswer: "B",
    hint: "This function returns the number of characters in the string."
  },
  {
    question: "Which method is used to add an item to the end of a list in Python?",
    options: [
      { value: "A", label: "append()" },
      { value: "B", label: "insert()" },
      { value: "C", label: "extend()" },
      { value: "D", label: "remove()" },
    ],
    correctAnswer: "A",
    hint: "This method modifies the list by adding an element at the end."
  },
  {
    question: "How do you start a comment in Python?",
    options: [
      { value: "A", label: "//" },
      { value: "B", label: "/*" },
      { value: "C", label: "#" },
      { value: "D", label: "<!--" },
    ],
    correctAnswer: "C",
    hint: "This symbol is used for single-line comments in Python."
  },
  {
    question: "Which keyword is used to handle exceptions in Python?",
    options: [
      { value: "A", label: "try" },
      { value: "B", label: "catch" },
      { value: "C", label: "finally" },
      { value: "D", label: "except" },
    ],
    correctAnswer: "D",
    hint: "This keyword is used after `try` block to catch exceptions."
  },
  {
    question: "What is the purpose of the `self` keyword in Python class methods?",
    options: [
      { value: "A", label: "To refer to the class itself" },
      { value: "B", label: "To refer to the instance of the class" },
      { value: "C", label: "To create a new method" },
      { value: "D", label: "To define a variable" },
    ],
    correctAnswer: "B",
    hint: "It refers to the object that is calling the method."
  },
  {
    question: "How can you convert a string to an integer in Python?",
    options: [
      { value: "A", label: "int('123')" },
      { value: "B", label: "string('123')" },
      { value: "C", label: "str('123')" },
      { value: "D", label: "float('123')" },
    ],
    correctAnswer: "A",
    hint: "This function converts the string representation of a number to an integer."
  },
];

export default questions;
