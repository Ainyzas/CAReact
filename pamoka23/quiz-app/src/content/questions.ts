export const myQuestions = [
  {
    questionText: 'What command do you run to create a React app?',
    options: ['npx create-react-app', 'npm create-react-app', 'create-react-app', 'install react-app'],
    correctAnswer: 'npx create-react-app',
  },
  {
    questionText: 'What is JSX in React?',
    options: [
      'A syntax extension for JavaScript',
      'A library for building user interfaces',
      'A build tool for React applications',
      'A package manager for React applications',
    ],
    correctAnswer: 'A syntax extension for JavaScript',
  },
  {
    questionText: 'What is the difference between props and state in React?',
    options: [
      'Props are immutable, while state can be changed',
      'Props can be changed, while state is immutable',
      'Props and state are the same thing',
      'Props and state are used for different purposes',
    ],
    correctAnswer: 'Props are immutable, while state can be changed',
  },
  {
    questionText: 'What is the purpose of the virtual DOM in React?',
    options: [
      'To improve performance by minimizing the number of DOM updates',
      'To render React components on the server',
      'To create a virtual representation of the entire web page',
      'To improve accessibility for users with disabilities',
    ],
    correctAnswer: 'To improve performance by minimizing the number of DOM updates',
  },
  {
    questionText: 'What is the purpose of React Router?',
    options: [
      'To handle navigation between different views in a React application',
      'To handle user input in a React application',
      'To manage the state of a React application',
      'To fetch data from a server in a React application',
    ],
    correctAnswer: 'To handle navigation between different views in a React application',
  },
  {
    questionText: 'What is a higher-order component in React?',
    options: [
      'A function that takes a component and returns a new component with additional functionality',
      'A component that renders other components',
      'A component that is used to manage state',
      'A component that is used to handle user input',
    ],
    correctAnswer: 'A function that takes a component and returns a new component with additional functionality',
  },
  {
    questionText: 'What is Redux in React?',
    options: [
      'A state management library',
      'A build tool for React applications',
      'A package manager for React applications',
      'A UI component library',
    ],
    correctAnswer: 'A state management library',
  },
  {
    questionText: 'What is the purpose of the componentDidMount lifecycle method in React?',
    options: [
      'To perform actions after a component has been mounted on the DOM',
      'To perform actions before a component has been mounted on the DOM',
      'To update the state of a component',
      'To handle user input in a component',
    ],
    correctAnswer: 'To perform actions after a component has been mounted on the DOM',
  },
  {
    questionText: 'What is the purpose of the shouldComponentUpdate lifecycle method in React?',
    options: [
      'To determine whether a component should re-render or not',
      'To perform actions after a component has been updated',
      'To perform actions before a component has been updated',
      'To handle user input in a component',
    ],
    correctAnswer: 'To determine whether a component should re-render or not',
  },
  {
    questionText: 'What is the purpose of the componentWillUnmount lifecycle method in React?',
    options: [
      'To perform cleanup actions before a component is removed from the DOM',
      'To perform actions after a component has been removed from the DOM',
      'To update the state of a component',
      'To handle user input in a component',
    ],
    correctAnswer: 'To perform cleanup actions before a component is removed from the DOM',
  },
  {
    questionText: 'What is the difference between `undefined` and `null` in JavaScript?',
    options: [
      '`undefined` means a variable has been declared but has not yet been assigned a value, whereas `null` is an assignment value representing no value or no object.',
      '`null` means a variable has been declared but has not yet been assigned a value, whereas `undefined` is an assignment value representing no value or no object.',
      '`undefined` and `null` are the same thing in JavaScript.',
      'Both `undefined` and `null` are not used in JavaScript.',
    ],
    correctAnswer:
      '`undefined` means a variable has been declared but has not yet been assigned a value, whereas `null` is an assignment value representing no value or no object.',
  },
  {
    questionText: 'What are the different data types available in JavaScript?',
    options: [
      'Number, String, Boolean, Object, Undefined, Null, Symbol',
      'Integer, Float, Character, Object, Void, Function',
      'Text, Boolean, Undefined, Null, Symbol',
      'None of the above',
    ],
    correctAnswer: 'Number, String, Boolean, Object, Undefined, Null, Symbol',
  },
  {
    questionText: 'How do you declare a variable in JavaScript?',
    options: ['var', 'let', 'const', 'All of the above'],
    correctAnswer: 'All of the above',
  },
  {
    questionText: 'What is the difference between `var`, `let`, and `const` in JavaScript?',
    options: [
      '`var` is function-scoped, `let` and `const` are block-scoped.',
      '`let` and `const` are function-scoped, `var` is block-scoped.',
      '`const` is function-scoped, `var` and `let` are block-scoped.',
      '`var`, `let`, and `const` are all function-scoped.',
    ],
    correctAnswer: '`var` is function-scoped, `let` and `const` are block-scoped.',
  },
  {
    questionText: 'What is the difference between `==` and `===` in JavaScript?',
    options: [
      '`==` compares values, `===` compares values and types.',
      '`==` compares types, `===` compares values and types.',
      '`==` compares values and types, `===` compares types.',
      '`==` and `===` are the same thing in JavaScript.',
    ],
    correctAnswer: '`==` compares values, `===` compares values and types.',
  },
  {
    questionText: 'What is a closure in JavaScript?',
    options: [
      'A closure is a function that has access to its outer function scope, even after the outer function has returned.',
      'A closure is a function that has access to its inner function scope, even before the inner function has been called.',
      'A closure is a function that has access to the global scope, even after the function has returned.',
      'A closure is a function that has access to the global scope, even before the function has been called.',
    ],
    correctAnswer:
      'A closure is a function that has access to its outer function scope, even after the outer function has returned.',
  },
  {
    questionText: 'What is the purpose of the `this` keyword in JavaScript?',
    options: [
      'The `this` keyword refers to the object that the function belongs to or the global object if it is not inside a function.',
      'The `this` keyword refers to the object that the function belongs to or `undefined` if it is not inside a function.',
      'The `this` keyword refers to the global object in all cases.',
      'The `this` keyword has no purpose in JavaScript.',
    ],
    correctAnswer:
      'The `this` keyword refers to the object that the function belongs to or the global object if it is not inside a function.',
  },
  {
    questionText: 'What is a callback function in JavaScript?',
    options: [
      'A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.',
      'A callback function is a function that is called before another function is executed.',
      'A callback function is a function that is called inside another function.',
      'A callback function is a function that is executed immediately when it is defined.',
    ],
    correctAnswer:
      'A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.',
  },
  {
    questionText: 'What is the difference between `map()` and `forEach()` methods in JavaScript?',
    options: [
      '`map()` returns a new array with the same length as the original array, while `forEach()` does not return a new array.',
      '`forEach()` returns a new array with the same length as the original array, while `map()` does not return a new array.',
      '`map()` and `forEach()` are the same thing in JavaScript.',
      'None of the above.',
    ],
    correctAnswer:
      '`map()` returns a new array with the same length as the original array, while `forEach()` does not return a new array.',
  },
  {
    questionText: 'What is the difference between `const` and `let` in JavaScript?',
    options: [
      '`const` variables cannot be re-assigned, while `let` variables can be re-assigned.',
      '`let` variables cannot be re-assigned, while `const` variables can be re-assigned.',
      '`const` and `let` variables are both immutable in JavaScript.',
      'None of the above.',
    ],
    correctAnswer: '`const` variables cannot be re-assigned, while `let` variables can be re-assigned.',
  },
  {
    questionText: 'What is Node.js?',
    options: [
      'A programming language',
      'A web browser',
      'A server-side JavaScript runtime',
      'A client-side JavaScript runtime',
    ],
    correctAnswer: 'A server-side JavaScript runtime',
  },
  {
    questionText: 'What is the Node.js module system called?',
    options: ['CommonJS', 'ECMAScript', 'AMD', 'UMD'],
    correctAnswer: 'CommonJS',
  },
  {
    questionText: 'What is npm?',
    options: ['A JavaScript framework', 'A Node.js package manager', 'A Node.js runtime', 'A Node.js web server'],
    correctAnswer: 'A Node.js package manager',
  },
  {
    questionText: 'Which of the following is not a core module in Node.js?',
    options: ['http', 'fs', 'path', 'ajax'],
    correctAnswer: 'ajax',
  },
  {
    questionText: 'What is a callback in Node.js?',
    options: [
      'A function that is called after an event occurs',
      'A function that is called before an event occurs',
      'A function that is executed immediately when it is defined',
      'A function that is called at a specific time',
    ],
    correctAnswer: 'A function that is called after an event occurs',
  },
  {
    questionText: 'What is the difference between `setImmediate()` and `setTimeout()` in Node.js?',
    options: [
      '`setImmediate()` schedules a callback function to be executed in the next iteration of the event loop, while `setTimeout()` schedules a callback function to be executed after a specified delay.',
      '`setTimeout()` schedules a callback function to be executed in the next iteration of the event loop, while `setImmediate()` schedules a callback function to be executed after a specified delay.',
      '`setImmediate()` and `setTimeout()` are the same thing in Node.js.',
      'None of the above.',
    ],
    correctAnswer:
      '`setImmediate()` schedules a callback function to be executed in the next iteration of the event loop, while `setTimeout()` schedules a callback function to be executed after a specified delay.',
  },
  {
    questionText: 'What is the purpose of the `require()` function in Node.js?',
    options: [
      'To load modules in Node.js',
      'To export modules in Node.js',
      'To install packages in Node.js',
      'To execute JavaScript code in Node.js',
    ],
    correctAnswer: 'To load modules in Node.js',
  },
  {
    questionText: 'What is the purpose of the `process` object in Node.js?',
    options: [
      'To provide information about the current Node.js process',
      'To manage child processes in Node.js',
      'To interact with the file system in Node.js',
      'To create a web server in Node.js',
    ],
    correctAnswer: 'To provide information about the current Node.js process',
  },
  {
    questionText: 'What is the purpose of the `fs` module in Node.js?',
    options: [
      'To interact with the file system in Node.js',
      'To create a web server in Node.js',
      'To manage child processes in Node.js',
      'To load modules in Node.js',
    ],
    correctAnswer: 'To interact with the file system in Node.js',
  },
  {
    questionText: 'What is the purpose of the `http` module in Node.js?',
    options: [
      'To create a web server in Node.js',
      'To manage child processes in Node.js',
      'To interact with the file system in Node.js',
      'To load modules in Node.js',
    ],
    correctAnswer: 'To create a web server in Node.js',
  },
];
