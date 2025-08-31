import { Question } from "@/types/Questions.types";

const ReactQuestions: Question[] = [
  {
    id: 1,
    question: "What is React?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "React is an open-source JavaScript library developed by Facebook for building user interfaces, especially for single-page applications using a component-based architecture.",
        },
      ],
    },
  },
  {
    id: 2,
    question: "What is JSX?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It is used with React to describe what the UI should look like and gets compiled to React.createElement calls.",
        },
      ],
    },
  },
  {
    id: 3,
    question: "What are components in React?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Components are reusable, self-contained pieces of UI in React that can be either functional or class-based.",
        },
      ],
    },
  },
  {
    id: 4,
    question: "What is the Virtual DOM?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "The Virtual DOM is a lightweight, in-memory representation of the real DOM used by React to optimize rendering by only applying changes where necessary.",
        },
      ],
    },
  },
  {
    id: 5,
    question: "What is the difference between state and props?",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "Props are inputs passed to components from parents and are immutable, while state is managed within the component and can be updated.",
        },
        {
          type: "code",
          content:
            `// Props example\n<MyComponent name="John" />\n\n// State example in functional component\nconst [count, setCount] = useState(0);`,
        },
      ],
    },
  },
  {
    id: 6,
    question: "What are React Hooks?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Hooks are special functions that let you use React features, like state and lifecycle methods, inside functional components without writing classes.",
        },
      ],
    },
  },
  {
    id: 7,
    question: "Explain useState hook.",
    answer: {
      type: "mixed",
      content: [
        {
          type: "text",
          content:
            "useState is a hook that allows functional components to manage state. It returns a stateful value and a function to update it.",
        },
        {
          type: "code",
          content:
            `const [count, setCount] = useState(0);\nsetCount(count + 1);`,
        },
      ],
    },
  },
  {
    id: 8,
    question: "What is useEffect hook used for?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "The useEffect hook lets you perform side effects in functional components, such as fetching data or subscribing to events.",
        },
      ],
    },
  },
  {
    id: 9,
    question: "What is the difference between a controlled and uncontrolled component?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Controlled components have their value controlled by React state, while uncontrolled components manage their own state internally.",
        },
      ],
    },
  },
  {
    id: 10,
    question: "What is the purpose of keys in React lists?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Keys help React identify which items have changed, been added, or removed, enabling efficient updates when rendering lists.",
        },
      ],
    },
  },
  {
    id: 11,
    question: "What is a Higher-Order Component (HOC)?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "A Higher-Order Component is a function that takes a component and returns a new component enhancing the original one.",
        },
      ],
    },
  },
  {
    id: 12,
    question: "What is the difference between React and ReactDOM?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "React is the core library responsible for creating components and managing state, whereas ReactDOM handles rendering React components to the DOM.",
        },
      ],
    },
  },
  {
    id: 13,
    question: "What is reconciliation in React?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Reconciliation is the process by which React updates the DOM by comparing the Virtual DOM with the real DOM and applying necessary changes.",
        },
      ],
    },
  },
  {
    id: 14,
    question: "What are fragments in React?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Fragments let you group a list of children without adding extra nodes to the DOM.",
        },
      ],
    },
  },
  {
    id: 15,
    question: "What is the purpose of useRef hook?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "useRef returns a mutable ref object whose .current property is initialized and can hold a DOM element or any mutable value.",
        },
      ],
    },
  },
  {
    id: 16,
    question: "Explain prop drilling and how to avoid it.",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Prop drilling is passing props through multiple component layers. It can be avoided using Context API or state management libraries like Redux.",
        },
      ],
    },
  },
  {
    id: 17,
    question: "What is the Context API?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Context API provides a way to pass data through the component tree without passing props down manually at every level.",
        },
      ],
    },
  },
  {
    id: 18,
    question: "What is the difference between PureComponent and Component?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "PureComponent implements shouldComponentUpdate with a shallow prop and state comparison, improving performance by preventing unnecessary renders.",
        },
      ],
    },
  },
  {
    id: 19,
    question: "What are error boundaries in React?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Error boundaries are components that catch JavaScript errors anywhere in their child component tree and display a fallback UI.",
        },
      ],
    },
  },
  {
    id: 20,
    question: "What is server-side rendering (SSR) in React?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "SSR is a technique where React components are rendered on the server and sent as HTML to the client for better performance and SEO.",
        },
      ],
    },
  },
  {
    id: 21,
    question: "What is lazy loading in React?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Lazy loading is a technique to load components only when they are needed, improving initial load performance using React.lazy and Suspense.",
        },
      ],
    },
  },
  {
    id: 22,
    question: "How do you handle events in React?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Events in React are handled using camelCase syntax and passing a function as the event handler rather than a string.",
        },
      ],
    },
  },
  {
    id: 23,
    question: "What is the purpose of setState?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "setState is used to update the component’s state object and schedule a re-render of the component.",
        },
      ],
    },
  },
  {
    id: 24,
    question: "What is the lifecycle method order in React class components?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Mounting: constructor → getDerivedStateFromProps → render → componentDidMount; Updating: getDerivedStateFromProps → shouldComponentUpdate → render → getSnapshotBeforeUpdate → componentDidUpdate; Unmounting: componentWillUnmount.",
        },
      ],
    },
  },
  {
    id: 25,
    question: "What is the importance of shouldComponentUpdate?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "shouldComponentUpdate allows you to prevent unnecessary rendering by returning false when the component does not need to update.",
        },
      ],
    },
  },
  {
    id: 26,
    question: "What is reconciliation process?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Reconciliation is React’s process of updating the DOM by diffing the new Virtual DOM with the previous one and applying minimal changes.",
        },
      ],
    },
  },
  {
    id: 27,
    question: "What is the purpose of React.StrictMode?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "React.StrictMode is a tool for highlighting potential problems in an application by activating additional checks and warnings.",
        },
      ],
    },
  },
  {
    id: 28,
    question: "How do you optimize performance in React?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Performance can be optimized by using techniques like React.memo, PureComponent, lazy loading, code splitting, and avoiding unnecessary state updates.",
        },
      ],
    },
  },
  {
    id: 29,
    question: "What are controlled components?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Controlled components are form inputs whose values are controlled by React state, allowing immediate response to user input.",
        },
      ],
    },
  },
  {
    id: 30,
    question: "What are uncontrolled components?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Uncontrolled components manage their own state internally and are accessed using refs instead of state in React.",
        },
      ],
    },
  },
  {
    id: 31,
    question: "What is lifting state up in React?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Lifting state up means moving state to the closest common ancestor of components that need it to share data between them.",
        },
      ],
    },
  },
  {
    id: 32,
    question: "What is React Router?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "React Router is a standard library for routing in React applications, enabling navigation among views without page reloads.",
        },
      ],
    },
  },
  {
    id: 33,
    question: "What is JSX spread attribute?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "JSX spread attribute allows spreading properties from an object onto a React element, e.g., <Component {...props} />.",
        },
      ],
    },
  },
  {
    id: 34,
    question: "What is the importance of keys in React?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Keys help React identify which items have changed, are added, or removed in a list, enhancing rendering performance.",
        },
      ],
    },
  },
  {
    id: 35,
    question: "What is React context?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Context provides a way to pass data through the component tree without prop drilling.",
        },
      ],
    },
  },
  {
    id: 36,
    question: "What is memoization in React?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Memoization in React involves caching component render output to avoid unnecessary rendering, e.g., using React.memo.",
        },
      ],
    },
  },
  {
    id: 37,
    question: "What is reconciliation algorithm?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "React’s reconciliation algorithm compares new and previous Virtual DOM trees to update the UI efficiently.",
        },
      ],
    },
  },
  {
    id: 38,
    question: "What is useCallback hook?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "useCallback returns a memoized callback that only changes if one of its dependencies has changed, helping to optimize performance.",
        },
      ],
    },
  },
  {
    id: 39,
    question: "What is useMemo hook?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "useMemo memoizes the result of a function and recomputes it only when dependencies change, avoiding expensive calculations on every render.",
        },
      ],
    },
  },
  {
    id: 40,
    question: "How does React handle forms?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "React handles forms by controlling elements with state or by using refs for uncontrolled components.",
        },
      ],
    },
  },
  {
    id: 41,
    question: "What is SyntheticEvent in React?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "SyntheticEvent is a cross-browser wrapper around the browser’s native event, providing consistent behavior.",
        },
      ],
    },
  },
  {
    id: 42,
    question: "What is the difference between stateful and stateless components?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Stateful components manage their own state, whereas stateless components are purely presentational and depend on props.",
        },
      ],
    },
  },
  {
    id: 43,
    question: "What are portals in React?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Portals provide a way to render children into a DOM node outside the parent component’s DOM hierarchy.",
        },
      ],
    },
  },
  {
    id: 44,
    question: "What are fragments and why use them?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Fragments let you group multiple elements without adding extra nodes to the DOM, reducing unnecessary markup.",
        },
      ],
    },
  },
  {
    id: 45,
    question: "What is reconciliation in React?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Reconciliation is the process React uses to compare the new virtual DOM with the previous one and update the DOM accordingly.",
        },
      ],
    },
  },
  {
    id: 46,
    question: "What is a pure function component?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "A pure function component returns the same output for the same props and has no side effects.",
        },
      ],
    },
  },
  {
    id: 47,
    question: "What is React Fiber?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "React Fiber is the new reconciliation engine in React 16+, designed to enable incremental rendering and better performance.",
        },
      ],
    },
  },
  {
    id: 48,
    question: "How does React handle events differently than HTML?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "React wraps events in SyntheticEvent for cross-browser compatibility and uses camelCase event handler names.",
        },
      ],
    },
  },
  {
    id: 49,
    question: "What are controlled inputs?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "Controlled inputs have their value controlled by React state, enabling validation and dynamic updates.",
        },
      ],
    },
  },
  {
    id: 50,
    question: "What is propTypes and why use it?",
    answer: {
      type: "text",
      content: [
        {
          type: "text",
          content:
            "propTypes is a type-checking tool for validating props passed to components and catching bugs early during development.",
        },
      ],
    },
  },
];
export default ReactQuestions;
