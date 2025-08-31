import { Question } from "@/types/Questions.types";

export const cssQuestions: Question[] = [

  {
    id: 1,
    question: "What is CSS?",
    answer: {
      type: "text",
      content: [
        { type: "text", content: "CSS (Cascading Style Sheets) is a stylesheet language used to style HTML elements on a webpage." },
      ],
    },
  },
  {
    id: 2,
    question: "What are the different types of CSS?",
    answer: {
      type: "text",
      content: [
        { type: "text", content: "Inline CSS, Internal CSS (using <style>), and External CSS (using .css file)." },
      ],
    },
  },
  {
    id: 3,
    question: "How to include an external CSS file in HTML?",
    answer: {
      type: "code",
      content: [
        { type: "code", content: "<link rel=\"stylesheet\" href=\"styles.css\">" },
      ],
    },
  },
  {
    id: 4,
    question: "What are pseudo-classes in CSS?",
    answer: {
      type: "mixed",
      content: [
        { type: "text", content: "Pseudo-classes define the state of an element." },
        { type: "code", content: "a:hover { color: red; }" },
      ],
    },
  },
  {
    id: 5,
    question: "What is the difference between relative, absolute, fixed, and sticky positioning?",
    answer: {
      type: "text",
      content: [
        { type: "text", content: "Relative: relative to itself, Absolute: relative to nearest positioned ancestor, Fixed: relative to viewport, Sticky: toggles between relative and fixed." },
      ],
    },
  },

  // ---------------- Intermediate ----------------
  {
    id: 6,
    question: "What are CSS variables?",
    answer: {
      type: "code",
      content: [
        { type: "code", content: ":root { --main-color: blue; }\nbody { color: var(--main-color); }" },
      ],
    },
  },
  {
    id: 7,
    question: "How does z-index work in CSS?",
    answer: {
      type: "text",
      content: [
        { type: "text", content: "z-index determines the stack order of elements. Higher z-index means element will be in front." },
      ],
    },
  },
  {
    id: 8,
    question: "What are media queries in CSS?",
    answer: {
      type: "mixed",
      content: [
        { type: "text", content: "Media queries are used to apply styles based on device conditions like width, height, or orientation." },
        { type: "code", content: "@media (max-width: 600px) { body { background: lightblue; } }" },
      ],
    },
  },
  {
    id: 9,
    question: "What is the difference between inline, block, and inline-block elements?",
    answer: {
      type: "text",
      content: [
        { type: "text", content: "Inline: does not start on new line, Block: starts on new line and takes full width, Inline-block: behaves like inline but allows block properties." },
      ],
    },
  },
  {
    id: 10,
    question: "What are CSS transitions?",
    answer: {
      type: "mixed",
      content: [
        { type: "text", content: "CSS transitions allow property changes to occur smoothly over a duration." },
        { type: "code", content: "div { transition: all 0.3s ease; }" },
      ],
    },
  },

  // ---------------- Advanced ----------------
  {
    id: 11,
    question: "What are CSS animations?",
    answer: {
      type: "code",
      content: [
        { type: "code", content: "@keyframes slide { from { left: 0; } to { left: 100px; } }\ndiv { position: relative; animation: slide 2s infinite; }" },
      ],
    },
  },
  {
    id: 12,
    question: "What is the difference between relative units (em, rem, %) and absolute units (px, pt, cm)?",
    answer: {
      type: "text",
      content: [
        { type: "text", content: "Relative units scale depending on parent or root element (em, rem, %). Absolute units are fixed sizes (px, pt, cm)." },
      ],
    },
  },
  {
    id: 13,
    question: "What is the difference between flexbox and grid in CSS?",
    answer: {
      type: "text",
      content: [
        { type: "text", content: "Flexbox is one-dimensional (row or column) layout, while CSS Grid is two-dimensional (rows and columns)." },
      ],
    },
  },
  {
    id: 14,
    question: "How do you center a div using flexbox?",
    answer: {
      type: "code",
      content: [
        { type: "code", content: "div { display: flex; justify-content: center; align-items: center; }" },
      ],
    },
  },
  {
    id: 15,
    question: "What are pseudo-elements in CSS?",
    answer: {
      type: "mixed",
      content: [
        { type: "text", content: "Pseudo-elements allow styling parts of an element like first line, first letter, or adding content." },
        { type: "code", content: "p::first-line { font-weight: bold; }" },
      ],
    },
  },

  // ---------------- More Advanced ----------------
  {
    id: 16,
    question: "What is the difference between absolute, relative, and fixed units in background positioning?",
    answer: {
      type: "text",
      content: [
        { type: "text", content: "Absolute units (px) are fixed, relative (% or em) depend on parent, fixed background remains fixed during scroll." },
      ],
    },
  },
  {
    id: 17,
    question: "How do you create a responsive image gallery using CSS Grid?",
    answer: {
      type: "code",
      content: [
        { type: "code", content: ".gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; }" },
      ],
    },
  },
  {
    id: 18,
    question: "What are CSS custom properties?",
    answer: {
      type: "code",
      content: [
        { type: "code", content: ":root { --main-bg: #333; }\nbody { background: var(--main-bg); }" },
      ],
    },
  },
  {
    id: 19,
    question: "What is the difference between relative and absolute URLs in CSS?",
    answer: {
      type: "text",
      content: [
        { type: "text", content: "Relative URL depends on the current file path, absolute URL is a complete web address starting with http/https." },
      ],
    },
  },
  {
    id: 20,
    question: "How do you create a CSS tooltip?",
    answer: {
      type: "code",
      content: [
        { type: "code", content: ".tooltip { position: relative; } .tooltip:hover::after { content: 'Tooltip text'; position: absolute; top: 100%; left: 0; background: black; color: white; padding: 5px; }" },
      ],
    },
  },
  {
    id: 21,
    question: "What is the difference between relative and absolute imports in CSS with @import?",
    answer: {
      type: "text",
      content: [
        { type: "text", content: "Relative @import refers to a file relative to the current file, while absolute refers to a URL or root path." },
      ],
    },
  },
  {
    id: 22,
    question: "What are CSS keyframes?",
    answer: {
      type: "code",
      content: [
        { type: "code", content: "@keyframes fade { from { opacity: 0; } to { opacity: 1; } } div { animation: fade 2s; }" },
      ],
    },
  },
  {
    id: 23,
    question: "What is the difference between relative and absolute positioning with transform translate?",
    answer: {
      type: "text",
      content: [
        { type: "text", content: "Relative positioning shifts element based on its normal position. transform: translate moves element without affecting flow." },
      ],
    },
  },
  {
    id: 24,
    question: "What are CSS counters?",
    answer: {
      type: "code",
      content: [
        { type: "code", content: "ol { counter-reset: section; } li::before { counter-increment: section; content: counter(section) '. '; }" },
      ],
    },
  },
  {
    id: 25,
    question: "How do you make a triangle using CSS?",
    answer: {
      type: "code",
      content: [
        { type: "code", content: ".triangle { width: 0; height: 0; border-left: 50px solid transparent; border-right: 50px solid transparent; border-bottom: 100px solid red; }" },
      ],
    },
  },
  {
    id: 26,
    question: "What is the difference between relative, fixed, and sticky headers?",
    answer: {
      type: "text",
      content: [
        { type: "text", content: "Relative header moves with content, fixed stays at the top, sticky sticks to the top after a threshold." },
      ],
    },
  },
  {
    id: 27,
    question: "What are CSS blend modes?",
    answer: {
      type: "code",
      content: [
        { type: "code", content: "div { background-blend-mode: multiply; }" },
      ],
    },
  },
  {
    id: 28,
    question: "How to implement dark mode with CSS variables?",
    answer: {
      type: "code",
      content: [
        { type: "code", content: ":root { --bg: white; --color: black; } .dark { --bg: black; --color: white; } body { background: var(--bg); color: var(--color); }" },
      ],
    },
  },
  {
    id: 29,
    question: "What is the difference between min-width and max-width in media queries?",
    answer: {
      type: "text",
      content: [
        { type: "text", content: "min-width applies styles when viewport is larger than or equal, max-width applies styles when viewport is smaller or equal." },
      ],
    },
  },
  {
    id: 30,
    question: "How do you create a CSS grid layout with header, sidebar, content, and footer?",
    answer: {
      type: "code",
      content: [
        { type: "code", content: ".container { display: grid; grid-template-areas: 'header header' 'sidebar content' 'footer footer'; grid-template-columns: 200px 1fr; grid-template-rows: auto 1fr auto; } .header { grid-area: header; } .sidebar { grid-area: sidebar; } .content { grid-area: content; } .footer { grid-area: footer; }" },
      ],
    },
  },
];
