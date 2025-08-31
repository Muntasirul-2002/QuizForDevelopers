import { Question } from "@/types/Questions.types";
const pythonQuestions: Question[] = [
  {
    id: 1,
    question: "What is Python?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Python is a high-level, interpreted, general-purpose programming language known for its readability and versatility.",
        },
      ],
    },
  },
  {
    id: 2,
    question: "What are Python's key features?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Python features include dynamic typing, automatic memory management, extensive standard libraries, and support for multiple programming paradigms.",
        },
      ],
    },
  },
  {
    id: 3,
    question: "What is PEP 8?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "PEP 8 is the Python Enhancement Proposal that provides guidelines for writing readable Python code including indentation and naming conventions.",
        },
      ],
    },
  },
  {
    id: 4,
    question: "What are Python data types?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Python's main data types include int, float, complex, list, tuple, set, frozenset, dict, str, bool, bytes, bytearray, and memoryview.",
        },
      ],
    },
  },
  {
    id: 5,
    question: "What is the difference between a list and a tuple?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Lists are mutable, allowing changes after creation, while tuples are immutable and cannot be changed once defined.",
        },
      ],
    },
  },
  {
    id: 6,
    question: "What are Python's scopes?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Python scopes are local, enclosing, global, and built-in, which define variable visibility and lifetime within different contexts.",
        },
      ],
    },
  },
  {
    id: 7,
    question: "What is the __init__ method?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "__init__ is a constructor method that initializes objects when a class instance is created.",
        },
      ],
    },
  },
  {
    id: 8,
    question: "What are Python decorators?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Decorators are functions that modify the behavior of other functions or methods without changing their code.",
        },
      ],
    },
  },
  {
    id: 9,
    question: "Explain list comprehensions.",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "List comprehensions provide a concise way to create lists by iterating and optionally filtering items in a single line.",
        },
      ],
    },
  },
  {
    id: 10,
    question: "What is a lambda function?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "A lambda function is an anonymous, inline function defined with the lambda keyword, primarily used for simple operations.",
        },
        {
          type: "code",
          content: "add = lambda x, y: x + y\nprint(add(2, 3))  # Output: 5",
        },
      ],
    },
  },
  {
    id: 11,
    question: "How is memory managed in Python?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Python manages memory automatically using a private heap and garbage collection for recycling unused objects.",
        },
      ],
    },
  },
  {
    id: 12,
    question: "What are Python modules and packages?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Modules are files containing Python code, while packages are directories containing modules and a special __init__.py file.",
        },
      ],
    },
  },
  {
    id: 13,
    question: "What is the difference between a shallow copy and a deep copy?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "A shallow copy copies the reference pointers, so nested objects are shared; deep copy copies everything recursively.",
        },
      ],
    },
  },
  {
    id: 14,
    question: "Explain Python's iterators and generators.",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Iterators are objects enabling iteration over elements, and generators are iterators that yield values lazily using the yield keyword.",
        },
      ],
    },
  },
  {
    id: 15,
    question: "What are *args and **kwargs?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "*args allows passing variable-length non-keyword arguments, while **kwargs allows variable-length keyword arguments to functions.",
        },
      ],
    },
  },
  {
    id: 16,
    question: "How do you handle exceptions in Python?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "Exceptions are handled in Python with try, except, else, and finally blocks to catch and process runtime errors.",
        },
        {
          type: "code",
          content:
            "try:\n  x = 1 / 0\nexcept ZeroDivisionError:\n  print('Cannot divide by zero')",
        },
      ],
    },
  },
  {
    id: 17,
    question: "How to define a class in Python?",
    answer: {
      type: "code",
      content: [
        {
          type: "code",
          content:
            "class Person:\n  def __init__(self, name, age):\n    self.name = name\n    self.age = age\n\n  def greet(self):\n    print(f'Hello, my name is {self.name}')",
        },
      ],
    },
  },
  {
    id: 18,
    question: "What is the difference between Python 2 and Python 3?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Python 3 introduced several improvements including print function, better Unicode support, and removed deprecated features from Python 2.",
        },
      ],
    },
  },
  {
    id: 19,
    question: "What are Python's built-in data structures?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Python's built-in data structures include list, tuple, set, frozenset, dict, and string.",
        },
      ],
    },
  },
  {
    id: 20,
    question: "How do you merge two dictionaries in Python?",
    answer: {
      type: "code",
      content: [
        {
          type: "code",
          content: `dict1 = {"a": 1, "b": 2}\ndict2 = {"b": 3, "c": 4}\nmerged = {**dict1, **dict2}\nprint(merged)  # Output: {'a': 1, 'b': 3, 'c': 4}`,
        },
      ],
    },
  },
  {
    id: 21,
    question: "How do you reverse a string in Python?",
    answer: {
      type: "code",
      content: [
        {
          type: "code",
          content: `s = 'hello'\nreversed_s = s[::-1]\nprint(reversed_s)  # Output: 'olleh'`,
        },
      ],
    },
  },
  {
    id: 22,
    question: "What is list slicing?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "List slicing is extracting a sub-list from a list using the syntax list[start:stop:step].",
        },
      ],
    },
  },
  {
    id: 23,
    question: "How do you install external packages in Python?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "External packages are installed using package managers like pip with commands such as 'pip install package_name'.",
        },
      ],
    },
  },
  {
    id: 24,
    question: "What is a Python generator?",
    answer: {
      type: "code",
      content: [
        {
          type: "code",
          content: `def gen_numbers():\n  for i in range(5):\n    yield i\n\nfor num in gen_numbers():\n  print(num)`,
        },
      ],
    },
  },
  {
    id: 25,
    question: "How does Python's garbage collection work?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Python uses reference counting and a cyclic garbage collector to manage memory and reclaim unused objects.",
        },
      ],
    },
  },
  {
    id: 26,
    question: "What are Python's anonymous functions?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Anonymous functions in Python are created with the lambda keyword and can have any number of arguments but a single expression.",
        },
      ],
    },
  },
  {
    id: 27,
    question: "How do you read and write files in Python?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "Files can be opened using the open() function. Use 'r' mode to read and 'w' mode to write files.",
        },
        {
          type: "code",
          content: `with open('file.txt', 'r') as file:\n  content = file.read()\n\nwith open('file.txt', 'w') as file:\n  file.write('Hello World')`,
        },
      ],
    },
  },
  {
    id: 28,
    question: "What is a virtual environment in Python?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "A virtual environment is an isolated Python environment to manage dependencies separately from system-wide packages.",
        },
      ],
    },
  },
  {
    id: 29,
    question: "How to handle missing keys in a Python dictionary?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Use the dict.get() method with a default value or collections.defaultdict to handle missing keys gracefully.",
        },
      ],
    },
  },
  {
    id: 30,
    question: "What are Python's boolean values?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Python boolean values are True and False, which are instances of the bool class inheriting from int.",
        },
      ],
    },
  },

  {
    id: 32,
    question: "What is the difference between is and == in Python?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "'is' checks for object identity, whereas '==' checks for equality of values.",
        },
      ],
    },
  },
  {
    id: 33,
    question: "Explain Python's pass statement.",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "pass is a null operation used as a placeholder where syntactically some code is required.",
        },
      ],
    },
  },
  {
    id: 34,
    question: "What is a Python package?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "A package is a directory containing an __init__.py file, used to organize related modules.",
        },
      ],
    },
  },
  {
    id: 35,
    question: "Explain Python's map() function.",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "map() applies a given function to all items of an iterable and returns an iterator.",
        },
        {
          type: "code",
          content: `def square(x):\n  return x * x\n\nsquared = list(map(square, [1, 2, 3]))\nprint(squared)  # Output: [1, 4, 9]`,
        },
      ],
    },
  },
  {
    id: 36,
    question: "How do you create a virtual environment?",
    answer: {
      type: "code",
      content: [
        {
          type: "code",
          content: `python -m venv myenv\nsource myenv/bin/activate  # Linux/macOS\nmyenv\\Scripts\\activate  # Windows`,
        },
      ],
    },
  },
  {
    id: 37,
    question: "What does the zip() function do?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "zip() aggregates elements from multiple iterables, creating tuples of corresponding elements.",
        },
        {
          type: "code",
          content: `a = [1, 2]\nb = ['x', 'y']\nzipped = list(zip(a, b))\nprint(zipped)  # Output: [(1, 'x'), (2, 'y')]`,
        },
      ],
    },
  },
  {
    id: 38,
    question: "What is a context manager in Python?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Context managers handle setup and teardown operations using with statements, e.g. file opening and closing.",
        },
      ],
    },
  },
  {
    id: 39,
    question: "What is pickling and unpickling?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Pickling converts a Python object into a byte stream; unpickling restores the object from the byte stream.",
        },
      ],
    },
  },
  {
    id: 40,
    question: "What are Python's standard libraries?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Python standard libraries include modules like os, sys, math, datetime, json, re, and many more for various tasks.",
        },
      ],
    },
  },
  {
    id: 41,
    question: "How do you perform string formatting in Python?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "Strings can be formatted using f-strings, format() method, or % operator.",
        },
        {
          type: "code",
          content: `name = "Alice"\nage = 30\nprint(f"My name is {name} and I am {age} years old.")`,
        },
      ],
    },
  },
  {
    id: 42,
    question: "What is the use of the pass statement?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "pass is used as a placeholder for future code to maintain syntactic correctness.",
        },
      ],
    },
  },
  {
    id: 43,
    question: "How do you swap two variables in Python?",
    answer: {
      type: "code",
      content: [
        {
          type: "code",
          content: `a = 5\nb = 10\na, b = b, a\nprint(a, b)  # Output: 10 5`,
        },
      ],
    },
  },
  {
    id: 44,
    question: "What is list comprehension?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "List comprehension is a concise way to create lists using a for loop inside square brackets.",
        },
      ],
    },
  },
  {
    id: 45,
    question: "What is the difference between mutable and immutable types?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Mutable types can be changed after creation (e.g., lists), while immutable types cannot be changed (e.g., strings, tuples).",
        },
      ],
    },
  },
  {
    id: 46,
    question: "How do you comment code in Python?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Single line comments start with #, multi-line comments are enclosed in triple quotes (''').",
        },
      ],
    },
  },
  {
    id: 47,
    question: "What is the difference between '==' and 'is' in Python?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "'==' compares values equality, while 'is' checks if two variables point to the same object in memory.",
        },
      ],
    },
  },
  {
    id: 48,
    question: "What are Python's loops?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content: "Python supports for and while loops for iteration.",
        },
      ],
    },
  },
  {
    id: 49,
    question: "How do you import modules in Python?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "code",
          content: `import math\nfrom os import path\nimport sys as system`,
        },
      ],
    },
  },
  {
    id: 50,
    question: "What is the GIL in Python?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "The Global Interpreter Lock (GIL) is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes simultaneously.",
        },
      ],
    },
  },
];
export default pythonQuestions;
