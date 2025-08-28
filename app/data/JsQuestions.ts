export type AnswerContent =
  | { type: "text"; content: string }
  | { type: "code"; content: string };

export type Question = {
  id: number;
  question: string;
  answer: {
    type: "text" | "mixed" | "code";
    content: AnswerContent[];
  };
};

const jsQuestions: Question[] = [
  // ---------------- Beginner ----------------
  {
    id: 1,
    question: "What are the different data types in JavaScript?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "JavaScript has 8 data types: string, number, bigint, boolean, undefined, null, symbol, and object.",
        },
      ],
    },
  },
  {
    id: 2,
    question: "What is the difference between == and === in JavaScript?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "== checks equality with type coercion, === checks equality without type coercion.",
        },
        { type: "code", content: `"5" == 5   // true\n"5" === 5  // false` },
      ],
    },
  },
  {
    id: 3,
    question: "What is a variable in JavaScript?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "A variable is a named container for storing data values. Declared using var, let, or const.",
        },
      ],
    },
  },
  {
    id: 4,
    question: "Explain the difference between var, let, and const.",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "• var → function-scoped\n• let → block-scoped, re-assignable\n• const → block-scoped, not re-assignable",
        },
        {
          type: "code",
          content: `var a = 1; let b = 2; const c = 3;`,
        },
      ],
    },
  },
  {
    id: 5,
    question: "What are JavaScript functions?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "Functions are reusable blocks of code that perform a specific task.",
        },
        { type: "code", content: `function greet() { return "Hello!"; }` },
      ],
    },
  },
  {
    id: 6,
    question: "What are template literals in JavaScript?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "Template literals allow embedded expressions using backticks (``).",
        },
        {
          type: "code",
          content: "let name = 'John';\nconsole.log(`Hello ${name}`);",
        },
      ],
    },
  },
  {
    id: 7,
    question: "What are arrays in JavaScript?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "Arrays are ordered collections of values, indexed starting from 0.",
        },
        { type: "code", content: "let arr = [1, 2, 3];" },
      ],
    },
  },
  {
    id: 8,
    question: "What are objects in JavaScript?",
    answer: {
      type: "mixed",
      content: [
        { type: "text", content: "Objects store data in key-value pairs." },
        { type: "code", content: "let user = { name: 'Alice', age: 25 };" },
      ],
    },
  },
  {
    id: 9,
    question: "What is the difference between null and undefined?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "null → intentional absence of value.\nundefined → variable declared but not assigned.",
        },
      ],
    },
  },
  {
    id: 10,
    question: "What is NaN in JavaScript?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "NaN means Not-a-Number. It results from invalid number operations.",
        },
        { type: "code", content: `"abc" * 2 // NaN` },
      ],
    },
  },

  // ---------------- Intermediate ----------------
  {
    id: 11,
    question: "What is a closure in JavaScript?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "A closure is a function that remembers variables from its outer scope.",
        },
        {
          type: "code",
          content: `function outer(){ let x=10; return ()=>x+1; }`,
        },
      ],
    },
  },
  {
    id: 12,
    question:
      "What is the difference between synchronous and asynchronous programming?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Synchronous → tasks execute one after another.\nAsynchronous → tasks can run without blocking execution.",
        },
      ],
    },
  },
  {
    id: 13,
    question: "What is the JavaScript event loop?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "The event loop manages asynchronous tasks by moving callbacks from the task queue to the call stack when it's empty.",
        },
      ],
    },
  },
  {
    id: 14,
    question: "What are promises in JavaScript?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "Promises represent the eventual result of an asynchronous operation.",
        },
        {
          type: "code",
          content: `let promise = new Promise((resolve)=>resolve("Done"));`,
        },
      ],
    },
  },
  {
    id: 15,
    question: "What is async/await?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content: "async/await provides a cleaner way to work with promises.",
        },
        {
          type: "code",
          content: `async function fetchData(){ let res = await fetch(url); }`,
        },
      ],
    },
  },
  {
    id: 16,
    question: "What are arrow functions?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "Arrow functions are a shorthand syntax for writing functions.",
        },
        { type: "code", content: "const add = (a,b) => a+b;" },
      ],
    },
  },
  {
    id: 17,
    question: "What is the difference between map, filter, and reduce?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "map → transform elements\nfilter → keep elements\nreduce → accumulate values",
        },
      ],
    },
  },
  {
    id: 18,
    question: "What is destructuring in JavaScript?",
    answer: {
      type: "code",
      content: [
        {
          type: "code",
          content: `const [a,b] = [1,2];\nconst {name, age} = {name:"Bob", age:30};`,
        },
      ],
    },
  },
  {
    id: 19,
    question: "What is the spread operator?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content: "The spread operator (...) expands arrays or objects.",
        },
        { type: "code", content: `let arr = [1,2]; let copy=[...arr];` },
      ],
    },
  },
  {
    id: 20,
    question: "Explain prototypal inheritance.",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Objects in JavaScript inherit from other objects via the prototype chain.",
        },
      ],
    },
  },

  // ---------------- Advanced ----------------
  {
    id: 21,
    question: "What is hoisting in JavaScript?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "Hoisting means moving variable and function declarations to the top of scope.",
        },
        { type: "code", content: `console.log(a); var a=5; // undefined` },
      ],
    },
  },
  {
    id: 22,
    question: "What are modules in JavaScript?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Modules allow splitting code into reusable files, using export and import.",
        },
      ],
    },
  },
  {
    id: 23,
    question: "What are higher-order functions?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "A function that takes another function as argument or returns a function.",
        },
      ],
    },
  },
  {
    id: 24,
    question: "What is currying in JavaScript?",
    answer: {
      type: "code",
      content: [
        {
          type: "code",
          content: `const add = a => b => a+b; console.log(add(2)(3)); // 5`,
        },
      ],
    },
  },
  {
    id: 25,
    question: "What is memoization?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Memoization is caching function results to improve performance.",
        },
      ],
    },
  },
  {
    id: 26,
    question: "What are generators in JavaScript?",
    answer: {
      type: "code",
      content: [
        { type: "code", content: `function* gen(){ yield 1; yield 2; }` },
      ],
    },
  },
  {
    id: 27,
    question: "What is the difference between deep copy and shallow copy?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Shallow copy → copies only references for nested objects. Deep copy → duplicates all values recursively.",
        },
      ],
    },
  },
  {
    id: 28,
    question: "What is debouncing and throttling?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Debouncing → ensures function executes after a delay of inactivity. Throttling → ensures function executes at most once in a time interval.",
        },
      ],
    },
  },
  {
    id: 29,
    question: "What is event delegation?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Attaching an event listener to a parent instead of individual child elements.",
        },
      ],
    },
  },
  {
    id: 30,
    question: "What is the difference between call, apply, and bind?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "• call → invokes with args separately\n• apply → invokes with args as array\n• bind → returns a new function with bound context",
        },
        {
          type: "code",
          content: `fn.call(obj,1,2); fn.apply(obj,[1,2]); fn.bind(obj)(1,2);`,
        },
      ],
    },
  },
];

export default jsQuestions;
