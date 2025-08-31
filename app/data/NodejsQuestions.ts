import { Question } from "@/types/Questions.types";

export const nodeQuestions: Question[] = [
  // ---------------- Beginner ----------------
  {
    id: 1,
    question: "What is Node.js?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Node.js is a runtime environment that allows you to run JavaScript code outside of the browser, built on the V8 JavaScript engine.",
        },
      ],
    },
  },
  {
    id: 2,
    question: "How do you check the installed Node.js version?",
    answer: {
      type: "code",
      content: [
        {
          type: "code",
          content: "node -v\n# or\nnode --version",
        },
      ],
    },
  },
  {
    id: 3,
    question: "What are Node.js modules?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "Modules in Node.js are reusable blocks of code that can be imported and exported between files.",
        },
        {
          type: "code",
          content:
            "// example\nconst fs = require('fs');\nfs.readFileSync('file.txt', 'utf8');",
        },
      ],
    },
  },
  {
    id: 4,
    question: "What is npm?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "npm (Node Package Manager) is the default package manager for Node.js used to install, manage, and share packages.",
        },
      ],
    },
  },
  {
    id: 5,
    question: "How to initialize a Node.js project?",
    answer: {
      type: "code",
      content: [
        {
          type: "code",
          content: "npm init -y",
        },
      ],
    },
  },

  // ---------------- Intermediate ----------------
  {
    id: 6,
    question: "What is the difference between require and import in Node.js?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "`require` is the CommonJS way of importing modules, while `import` is part of ES Modules (ESM). ESM requires enabling in package.json.",
        },
        {
          type: "code",
          content:
            "// CommonJS\nconst fs = require('fs');\n\n// ESM\nimport fs from 'fs';",
        },
      ],
    },
  },
  {
    id: 7,
    question: "How to create a simple HTTP server in Node.js?",
    answer: {
      type: "code",
      content: [
        {
          type: "code",
          content:
            "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello, Node.js!');\n});\n\nserver.listen(3000, () => {\n  console.log('Server running on http://localhost:3000');\n});",
        },
      ],
    },
  },
  {
    id: 8,
    question: "What is the EventEmitter in Node.js?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "EventEmitter is a class in the events module that facilitates communication between objects through events.",
        },
        {
          type: "code",
          content:
            "const EventEmitter = require('events');\nconst emitter = new EventEmitter();\n\nemitter.on('greet', (name) => {\n  console.log(`Hello ${name}`);\n});\n\nemitter.emit('greet', 'Muntasirul');",
        },
      ],
    },
  },
  {
    id: 9,
    question: "What are streams in Node.js?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Streams are objects that let you read or write data sequentially. Types: Readable, Writable, Duplex, and Transform.",
        },
      ],
    },
  },
  {
    id: 10,
    question: "How do you read and write files in Node.js?",
    answer: {
      type: "code",
      content: [
        {
          type: "code",
          content:
            "const fs = require('fs');\n\n// Write\nfs.writeFileSync('test.txt', 'Hello World');\n\n// Read\nconst data = fs.readFileSync('test.txt', 'utf8');\nconsole.log(data);",
        },
      ],
    },
  },

  // ---------------- Advanced ----------------
  {
    id: 11,
    question: "What is middleware in Node.js?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "Middleware are functions in Express.js that execute during the request-response cycle, used for authentication, logging, etc.",
        },
        {
          type: "code",
          content:
            "app.use((req, res, next) => {\n  console.log('Middleware executed');\n  next();\n});",
        },
      ],
    },
  },
  {
    id: 12,
    question: "How do you handle errors in Node.js async code?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content: "You can use try/catch blocks for async/await and callbacks with error-first signature.",
        },
        {
          type: "code",
          content:
            "async function fetchData() {\n  try {\n    const data = await getData();\n  } catch (err) {\n    console.error(err);\n  }\n}",
        },
      ],
    },
  },
  {
    id: 13,
    question: "What is clustering in Node.js?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Clustering is a technique to scale Node.js applications by creating multiple worker processes sharing the same server port.",
        },
      ],
    },
  },
  {
    id: 14,
    question: "What are worker threads in Node.js?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Worker threads allow running JavaScript in parallel threads, useful for CPU-intensive tasks.",
        },
      ],
    },
  },
  {
    id: 15,
    question: "How do you connect Node.js with MongoDB?",
    answer: {
      type: "code",
      content: [
        {
          type: "code",
          content:
            "const mongoose = require('mongoose');\n\nmongoose.connect('mongodb://localhost:27017/testdb')\n  .then(() => console.log('DB Connected'))\n  .catch(err => console.error(err));",
        },
      ],
    },
  },


];
